import { z } from 'zod'
import { useContext, useEffect, useState, createContext, useRef } from 'react'
import { BooleanConfig, Fields, ModelConfig } from '../../types'
import { CrudForm } from './crud-form'
import { UseFormReturn } from 'react-hook-form'

type CrudEditContextProps =
   | {
        onFieldChange: (field: string, callback: (value: any) => void) => void
        getValues: () => { [key: string]: any }
        setValue: (field: string, value: any) => void
        getValue: (field: string) => any
        onBeforeSave: (callback: () => Promise<boolean>) => void
        onAfterSave: (callback: () => Promise<boolean>) => void
        onCreateInit: (callback: () => void) => void
        onEditInit: (callback: () => void) => void
        // autoCompleteSelect
     }
   | undefined

const CrudEditContext = createContext<CrudEditContextProps>(undefined)

interface CrudEditInput {
   children: React.ReactNode
   model: ModelConfig
   id?: string
   onCancel?: () => void
}

const CrudEdit = ({ children, model, id, onCancel }: CrudEditInput) => {
   const watchers = useRef<{ [key: string]: (value: any) => void }>({})
   const formInstanceRef = useRef<UseFormReturn | null>(null)
   const onBeforeSaveRef = useRef<() => Promise<boolean>>()
   const onAfterSaveRef = useRef<() => Promise<boolean>>()
   const onCreateInitRef = useRef<() => void>()
   const onEditInitRef = useRef<() => void>()

   const [isSending, setIsSending] = useState<boolean>(false)

   const fields = model.fields
   const formFields: Fields = {}
   const defaultValues: { [key: string]: any } = {}
   Object.keys(fields).forEach((key: keyof Fields) => {
      const field = fields[key]

      if (field.type === 'boolean') {
         const booleanConfig = fields[key].config as BooleanConfig
         defaultValues[key] = booleanConfig.default
      } else {
         defaultValues[key] = ''
      }

      if (field.edit) {
         formFields[key] = field
      }
   })

   async function onSubmit(data: z.infer<z.ZodObject<any, any>>) {
      setIsSending(true)

      if (onBeforeSaveRef.current) {
         const beforeSaveRefResponse = await onBeforeSaveRef.current()
         if (!beforeSaveRefResponse) {
            setIsSending(false)
            return
         }
      }

      console.log('Submit:', data)
      await new Promise((resolve) => {
         setTimeout(() => {
            resolve(true)
         }, 500)
      })

      if (onAfterSaveRef.current) {
         await onAfterSaveRef.current()
      }

      setIsSending(false)

      if (onCancel) {
         onCancel
      }
   }

   function onFieldChange(field: string, callback: (value: any) => void): void {
      if (field in fields) {
         watchers.current[field] = callback
      } else {
         throw new Error(`watch: Field ${field} not found in model`)
      }
   }

   function getValues() {
      const formInstance = getFormInstance()
      return formInstance?.getValues() || {}
   }

   function setValue(field: string, value: any) {
      if (field in fields) {
         const formInstance = getFormInstance()
         formInstance?.setValue(field, value)
      } else {
         throw new Error(`setValue: Field ${field} not found in model`)
      }
   }

   function getValue(field: string) {
      if (field in fields) {
         const formInstance = getFormInstance()
         return formInstance?.getValues(field)
      } else {
         throw new Error(`getValue: Field ${field} not found in model`)
      }
   }

   function setFormInstance(instance: UseFormReturn) {
      formInstanceRef.current = instance
   }

   function getFormInstance() {
      return formInstanceRef.current
   }

   function onBeforeSave(callback: () => Promise<boolean>) {
      onBeforeSaveRef.current = callback
   }

   function onAfterSave(callback: () => Promise<boolean>) {
      onAfterSaveRef.current = callback
   }

   function onCreateInit(callback: () => void) {
      onCreateInitRef.current = callback
   }

   function onEditInit(callback: () => void) {
      onEditInitRef.current = callback
   }

   useEffect(() => {
      const formInstance = getFormInstance()

      if (!formInstance || Object.keys(watchers.current).length == 0) return

      const subscription = formInstance.watch((data, { name }) => {
         if (name && watchers.current[name]) {
            watchers.current[name](data[name])
         }
      })

      return () => subscription.unsubscribe()
   }, [formInstanceRef.current])

   useEffect(() => {
      if (id) {
         onEditInitRef.current?.()
      } else {
         onCreateInitRef.current?.()
      }
   }, [])

   const contextValue: CrudEditContextProps = {
      onFieldChange,
      getValues,
      setValue,
      getValue,
      onBeforeSave,
      onAfterSave,
      onCreateInit,
      onEditInit,
   }

   return (
      <CrudEditContext.Provider value={contextValue}>
         <CrudForm
            fields={formFields}
            defaultValues={defaultValues}
            onSubmit={onSubmit}
            onCancel={onCancel}
            isSending={isSending}
            formRef={setFormInstance}
         />
         {children}
      </CrudEditContext.Provider>
   )
}

const useCrudEdit = () => {
   const context = useContext(CrudEditContext)
   if (!context) {
      throw new Error('useCrudEdit must be used within a CrudEditProvider')
   }
   return context
}

export { CrudEdit, useCrudEdit }
