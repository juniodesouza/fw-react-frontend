import { z } from 'zod'
import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useNavigate } from 'react-router-dom'
import { BooleanConfig, Fields, ModelConfig } from '../../types'
import { CrudForm } from './crud-form'
import { UseFormReturn } from 'react-hook-form'
// import { Button } from '@/components/ui/button'

interface CrudEditInput {
   model: ModelConfig
   description?: string
}

const CrudEdit = ({ model, description }: CrudEditInput) => {
   const navigate = useNavigate()

   const [isSending, setIsSending] = useState(false)
   const [formInstance, setFormInstance] = useState<UseFormReturn | null>(null)

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

      // field.config.require = false

      if (field.edit) {
         formFields[key] = field
      }
   })

   function onCancel() {
      navigate(`/app/${model.route}`)
   }

   function onSubmit(data: z.infer<z.ZodObject<any, any>>) {
      setIsSending(true)
      console.log(data)

      setTimeout(() => {
         setIsSending(false)
      }, 1000)
   }

   console.log(formInstance)

   return (
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
   )
}

export { CrudEdit }
