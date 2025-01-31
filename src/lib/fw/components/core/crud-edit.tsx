import { z } from 'zod'
import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
// import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Button } from '@/components/ui/button'
import FWBreadcrumb from '@/components/layout/breadcrumb/breadcrumb'
import { useNavigate } from 'react-router-dom'
import { Fields, ModelConfig } from '../../types'
import { CrudForm } from './crud-form'

interface CrudEditInput {
   model: ModelConfig
   description?: string
}

const CrudEdit = ({ model, description }: CrudEditInput) => {
   const navigate = useNavigate()

   const [isLoading, setIsLoading] = useState(false)

   const fields = model.fields

   const defaultValues: { [key: string]: any } = {}
   //defaultValues[key] = booleanConfig.default
   Object.keys(fields).forEach((key: keyof Fields) => {
      defaultValues[key] = ''
   })

   function onCancel() {
      navigate(`/app/${model.route}`)
   }

   function onSubmit(data: z.infer<z.ZodObject<any, any>>) {
      setIsLoading(true)
      console.log(data)

      setTimeout(() => {
         setIsLoading(false)
      }, 1000)
   }

   return (
      <div className="space-y-4">
         <FWBreadcrumb />
         <div className="flex items-end gap-2 align-middle">
            <div className="flex-1">
               <h1 className="text-3xl font-bold">{model.label}</h1>
               {description && (
                  <p className="text-sm italic text-muted-foreground">
                     {description}
                  </p>
               )}
            </div>
            <Button variant="outline" size="sm" className="px-4">
               Exportar
            </Button>
         </div>
         <div>
            {/* <Tabs defaultValue="account" className="">
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
               <TabsContent value="account">Informações</TabsContent>
               <TabsContent value="password">Revisões</TabsContent>
               <TabsContent value="cenarios">Cenários</TabsContent>
            </Tabs> */}

            <Card className="rounded-xl">
               <CardContent className="pt-6">
                  <CrudForm
                     fields={fields}
                     defaultValues={defaultValues}
                     onSubmit={onSubmit}
                     onCancel={onCancel}
                     isLoading={isLoading}
                  />
               </CardContent>
            </Card>
         </div>
      </div>
   )
}

export { CrudEdit }
