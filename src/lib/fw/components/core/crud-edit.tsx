import { z } from 'zod'
import { useContext, useEffect, useState, createContext, useRef } from 'react'
import { BooleanConfig, Fields, ModelConfig } from '../../types'
import { CrudForm } from './crud-form'
import { UseFormReturn } from 'react-hook-form'

type CrudEditContextProps<T extends ModelConfig> =
   | {
        onFieldChange: <K extends keyof T['fields']>(
           field: K,
           callback: (value: any) => void
        ) => void
        getValues: <K extends keyof T['fields']>() => Record<K, any>
        setValue: <K extends keyof T['fields']>(field: K, value: any) => void
        getValue: <K extends keyof T['fields']>(field: K) => any
        onBeforeSave: (callback: () => Promise<boolean>) => void
        onAfterSave: (callback: () => Promise<boolean>) => void
        onCreateInit: (callback: () => void) => void
        onEditInit: (callback: () => void) => void
        // autoCompleteSelect
     }
   | undefined

const CrudEditContext = createContext<CrudEditContextProps<any>>(undefined)

interface CrudEditInput<T extends ModelConfig> {
   children: React.ReactNode
   model: T
   id?: string
   onCancel?: () => void
}

const CrudEdit = <T extends ModelConfig>({
   children,
   model,
   id,
   onCancel,
}: CrudEditInput<T>) => {
   const watchers = useRef<{ [key: string]: (value: any) => void }>({})
   const formInstanceRef = useRef<UseFormReturn | null>(null)
   const onBeforeSaveRef = useRef<() => Promise<boolean>>()
   const onAfterSaveRef = useRef<() => Promise<boolean>>()
   const onCreateInitRef = useRef<() => void>()
   const onEditInitRef = useRef<() => void>()

   const [isSending, setIsSending] = useState<boolean>(false)

   const fields = structuredClone(model.fields)
   const defaultValues: { [key: string]: any } = {}
   Object.keys(fields).forEach((key: keyof Fields) => {
      const field = fields[key]

      if (field.type === 'boolean') {
         const booleanConfig = fields[key].config as BooleanConfig
         defaultValues[key] = booleanConfig.default
      } else {
         defaultValues[key] = ''
      }

      field.config.show = field.config.edit
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

   function onFieldChange<K extends keyof T['fields']>(
      field: K,
      callback: (value: any) => void
   ): void {
      if (field in fields) {
         watchers.current[field as string] = callback
      } else {
         throw new Error(`watch: Field ${field as string} not found in model`)
      }
   }

   function getValues<K extends keyof T['fields']>(): Record<K, any> {
      const formInstance = getFormInstance()
      return (formInstance?.getValues() || {}) as Record<K, any>
   }

   function setValue<K extends keyof T['fields']>(field: K, value: any) {
      if (field in fields) {
         const formInstance = getFormInstance()
         formInstance?.setValue(field as string, value)
      } else {
         throw new Error(
            `setValue: Field ${field as string} not found in model`
         )
      }
   }

   function getValue<K extends keyof T['fields']>(field: K) {
      if (field in fields) {
         const formInstance = getFormInstance()
         return formInstance?.getValues(field as string)
      } else {
         throw new Error(
            `getValue: Field ${field as string} not found in model`
         )
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

   const contextValue: CrudEditContextProps<T> = {
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
            fields={fields}
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

const useCrudEdit = <T extends ModelConfig>() => {
   const context = useContext(CrudEditContext) as CrudEditContextProps<T>
   if (!context) {
      throw new Error('useCrudEdit must be used within a CrudEditProvider')
   }
   return context
}

export { CrudEdit, useCrudEdit }
