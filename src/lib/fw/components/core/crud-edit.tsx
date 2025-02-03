import { z } from 'zod'
import { useContext, useEffect, useState, createContext, useRef } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useNavigate } from 'react-router-dom'
import { BooleanConfig, Fields, ModelConfig } from '../../types'
import { CrudForm } from './crud-form'
import { UseFormReturn } from 'react-hook-form'
// import { Button } from '@/components/ui/button'

type CrudEditContextProps =
   | {
        setDescription: (description: string) => void
        watch: (field: string, callback: (value: any) => void) => void
        getValues: () => { [key: string]: any }
        setValue: (field: string, value: any) => void
        getValue: (field: string) => any
        beforeSave: (callback: () => Promise<boolean>) => void
        afterSave: (callback: () => Promise<boolean>) => void
        // autoCompleteSelect
        // dataNew
        // dataEdit
     }
   | undefined

const CrudEditContext = createContext<CrudEditContextProps>(undefined)

interface CrudEditInput {
   children: React.ReactNode
   model: ModelConfig
}

const CrudEdit = ({ children, model }: CrudEditInput) => {
   const navigate = useNavigate()

   const watchers = useRef<{ [key: string]: (value: any) => void }>({})
   const formInstanceRef = useRef<UseFormReturn | null>(null)
   const beforeSaveRef = useRef<() => Promise<boolean>>()
   const afterSaveRef = useRef<() => Promise<boolean>>()

   const [isSending, setIsSending] = useState(false)
   const [description, setDescription] = useState<string | ''>('')

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

   function onCancel() {
      navigate(`/app/${model.route}`)
   }

   async function onSubmit(data: z.infer<z.ZodObject<any, any>>) {
      setIsSending(true)

      if (beforeSaveRef.current) {
         const beforeSaveRefResponse = await beforeSaveRef.current()
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

      if (afterSaveRef.current) {
         await afterSaveRef.current()
      }

      setIsSending(false)

      onCancel()
   }

   function watch(field: string, callback: (value: any) => void): void {
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

   function beforeSave(callback: () => Promise<boolean>) {
      beforeSaveRef.current = callback
   }

   function afterSave(callback: () => Promise<boolean>) {
      afterSaveRef.current = callback
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

   const contextValue: CrudEditContextProps = {
      setDescription,
      watch,
      getValues,
      setValue,
      getValue,
      beforeSave,
      afterSave,
   }

   return (
      <CrudEditContext.Provider value={contextValue}>
         <div className="space-y-4 pt-6">
            <div className="flex items-end gap-2 align-middle">
               <div className="flex-1">
                  <h1 className="text-3xl font-bold">{model.label}</h1>
                  {description && (
                     <p className="text-sm italic text-muted-foreground">
                        {description}
                     </p>
                  )}
               </div>
               {/* <Button variant="outline" size="sm" className="px-4">
               Exportar
            </Button> */}
            </div>
            <div>
               <Tabs defaultValue="account" className="">
                  <TabsList className="w-full justify-start">
                     <TabsTrigger className="px-5" value="account">
                        Informações
                     </TabsTrigger>
                     <TabsTrigger className="px-5" value="password">
                        Revisões
                     </TabsTrigger>
                     <TabsTrigger className="px-5" value="cenarios">
                        Cenários
                     </TabsTrigger>
                  </TabsList>
                  <TabsContent value="account">
                     <Card className="rounded-xl">
                        <CardContent className="pt-6">
                           <CrudForm
                              fields={formFields}
                              defaultValues={defaultValues}
                              onSubmit={onSubmit}
                              onCancel={onCancel}
                              isSending={isSending}
                              formRef={setFormInstance}
                           />
                        </CardContent>
                     </Card>
                  </TabsContent>
                  <TabsContent value="password">Revisões</TabsContent>
                  <TabsContent value="cenarios">Cenários</TabsContent>
               </Tabs>
            </div>
         </div>
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
