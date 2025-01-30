import {
   AutocompleteConfig,
   BooleanConfig,
   CurrencyConfig,
   DateConfig,
   Fields,
   FileConfig,
   FloatConfig,
   ModelConfig,
   NumberConfig,
   PasswordConfig,
   SelectConfig,
   StringConfig,
   TextareaConfig,
   TextEditorConfig,
   TimeConfig,
} from './types'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import {
   Form,
   FormField,
   FormItem,
   FormLabel,
   FormMessage,
} from '@/components/ui/form'
import { useState } from 'react'
import { CrudInput } from './crud.input'
import { Card, CardContent } from '@/components/ui/card'
// import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Button } from '@/components/ui/button'
import FWBreadcrumb from '@/components/layout/breadcrumb/breadcrumb'
import { Link } from 'react-router-dom'
import { LoaderCircle } from 'lucide-react'
import {
   autocompleteValidator,
   booleanValidator,
   currencyValidator,
   dateValidator,
   fileValidator,
   floatValidator,
   numberValidator,
   passwordValidator,
   selectValidator,
   stringValidator,
   textareaValidator,
   texteditorValidator,
   timeValidator,
} from './validators'

interface CrudEditInput {
   model: ModelConfig
   description?: string
}

const FWCrudEdit = ({ model, description }: CrudEditInput) => {
   const [isLoading, setIsLoading] = useState(false)

   const fields = model.fields
   const defaultValues: { [key: string]: any } = {}
   const zobject: { [key: string]: any } = {}

   Object.keys(fields).forEach((key: keyof Fields) => {
      defaultValues[key] = ''

      const field = fields[key]
      const config = fields[key].config

      switch (field.type) {
         case 'number': {
            zobject[key] = numberValidator(config as NumberConfig)
            break
         }

         case 'string': {
            zobject[key] = stringValidator(config as StringConfig)
            break
         }

         case 'boolean': {
            const booleanConfig = fields[key].config as BooleanConfig
            zobject[key] = booleanValidator(booleanConfig)
            defaultValues[key] = booleanConfig.default
            break
         }

         case 'select': {
            zobject[key] = selectValidator(config as SelectConfig)
            break
         }

         case 'date': {
            zobject[key] = dateValidator(config as DateConfig)
            break
         }

         case 'time': {
            zobject[key] = timeValidator(config as TimeConfig)
            break
         }

         case 'float': {
            zobject[key] = floatValidator(config as FloatConfig)
            break
         }

         case 'currency': {
            zobject[key] = currencyValidator(config as CurrencyConfig)
            break
         }

         case 'password': {
            zobject[key] = passwordValidator(config as PasswordConfig)
            break
         }

         case 'autocomplete': {
            zobject[key] = autocompleteValidator(config as AutocompleteConfig)
            break
         }

         case 'file': {
            zobject[key] = fileValidator(config as FileConfig)
            break
         }

         case 'textarea': {
            zobject[key] = textareaValidator(config as TextareaConfig)
            break
         }

         case 'texteditor': {
            zobject[key] = texteditorValidator(config as TextEditorConfig)
            break
         }
      }
   })

   const formSchema = z.object(zobject)
   const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: defaultValues,
   })

   function onSubmit(data: z.infer<typeof formSchema>) {
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
                  <Form {...form}>
                     <form onSubmit={form.handleSubmit(onSubmit)}>
                        <div className="grid grid-cols-12 gap-4">
                           {Object.keys(fields).map(function (key, idx) {
                              if (!fields[key].edit) return null
                              return (
                                 <FormField
                                    key={idx}
                                    control={form.control}
                                    name={key}
                                    render={({ field }) => (
                                       <FormItem
                                          className={`col-span-12 space-y-0 sm:col-span-${fields[key]?.config.size || '4'}`}
                                       >
                                          <FormLabel>
                                             {fields[key].label}
                                          </FormLabel>
                                          <CrudInput
                                             id={key}
                                             field={fields[key]}
                                             props={field}
                                          />
                                          <FormMessage />
                                       </FormItem>
                                    )}
                                 />
                              )
                           })}
                           <div className="col-span-12 mt-6 flex items-center justify-center gap-4">
                              <Button
                                 type="button"
                                 variant="outline"
                                 className="w-40"
                                 asChild
                              >
                                 <Link to={`/app/${model.route}`}>
                                    Cancelar
                                 </Link>
                              </Button>

                              <Button
                                 type="submit"
                                 className="w-40"
                                 disabled={isLoading}
                              >
                                 {isLoading && (
                                    <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
                                 )}
                                 Salvar
                              </Button>
                           </div>
                        </div>
                     </form>
                  </Form>
               </CardContent>
            </Card>
         </div>
      </div>
   )
}

export { FWCrudEdit }
