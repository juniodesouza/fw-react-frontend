import {
   BooleanConfig,
   DateConfig,
   Fields,
   FloatConfig,
   ModelConfig,
   NumberConfig,
   SelectConfig,
   StringConfig,
   TextareaConfig,
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

interface CrudEditInput {
   model: ModelConfig
   description?: string
}

const FWCrudEdit = ({ model, description }: CrudEditInput) => {
   const [isLoading, setIsLoading] = useState(false)

   const fields = model.fields
   const defaultValues: { [key: string]: any } = {}
   const zobject: { [key: string]: any } = {}
   const requiredMessage = 'Este campo é obrigatório'

   Object.keys(fields).forEach((key: keyof Fields) => {
      const field = fields[key]

      defaultValues[key] = ''

      switch (field.type) {
         case 'number': {
            const config = fields[key].config as NumberConfig

            zobject[key] = z.string().transform((val, ctx) => {
               if (val == '') {
                  if (config.require) {
                     ctx.addIssue({
                        code: z.ZodIssueCode.custom,
                        message: requiredMessage,
                     })
                     return z.NEVER
                  } else {
                     return null
                  }
               }

               const parsed = parseInt(val)

               if (config.min && parsed < config.min) {
                  ctx.addIssue({
                     code: z.ZodIssueCode.custom,
                     message: 'O valor deve ser no mínimo ' + config.min,
                  })
                  return z.NEVER
               }

               if (config.max && parsed > config.max) {
                  ctx.addIssue({
                     code: z.ZodIssueCode.custom,
                     message: 'O valor deve ser no máximo ' + config.max,
                  })
                  return z.NEVER
               }

               return parsed
            })

            break
         }

         case 'string': {
            const config = fields[key].config as StringConfig

            zobject[key] = z.string()

            if (config.require) {
               zobject[key] = zobject[key].min(1, {
                  message: requiredMessage,
               })
            }

            if (config.email) {
               zobject[key] = zobject[key].email({
                  message: 'E-mail inválido',
               })
            }

            if (config.cnpj) {
               zobject[key] = zobject[key].regex(
                  /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/,
                  {
                     message: 'CNPJ inválido',
                  }
               )
            }

            if (config.cpf) {
               zobject[key] = zobject[key].regex(
                  /^\d{3}\.\d{3}\.\d{3}-\d{2}$/,
                  {
                     message: 'CPF inválido',
                  }
               )
            }

            if (config.phone) {
               zobject[key] = zobject[key].regex(/^\(\d{2}\) \d{4,5}-\d{4}$/, {
                  message: 'Telefone inválido',
               })
            }

            if (config.cep) {
               zobject[key] = zobject[key].regex(/^\d{5}-\d{3}$/, {
                  message: 'CEP inválido',
               })
            }

            break
         }

         case 'boolean': {
            const config = fields[key].config as BooleanConfig

            defaultValues[key] = config.default

            zobject[key] = z.coerce
               .boolean({
                  required_error: requiredMessage,
               })
               .default(config.default)
            break
         }

         case 'select': {
            const config = fields[key].config as SelectConfig

            zobject[key] = z.string()

            if (config.require) {
               zobject[key] = zobject[key].min(1, {
                  message: requiredMessage,
               })
            }

            break
         }

         case 'date': {
            const config = fields[key].config as DateConfig

            if (config.require) {
               zobject[key] = z.date({ message: requiredMessage })
            } else {
               zobject[key] = z.date().optional()
            }

            break
         }

         case 'time': {
            const config = fields[key].config as TimeConfig

            zobject[key] = z.string()

            if (config.require) {
               zobject[key] = zobject[key].min(1, {
                  message: requiredMessage,
               })
            }

            zobject[key] = zobject[key].regex(/^([01]\d|2[0-3]):[0-5]\d$/, {
               message: 'Horário inválido',
            })

            break
         }

         case 'float': {
            const config = fields[key].config as FloatConfig

            zobject[key] = z.string().transform((val, ctx) => {
               if (val == '') {
                  if (config.require) {
                     ctx.addIssue({
                        code: z.ZodIssueCode.custom,
                        message: requiredMessage,
                     })
                     return z.NEVER
                  } else {
                     return null
                  }
               }

               const parsed = parseFloat(val.replace(',', '.'))

               return parsed
            })

            break
         }

         case 'currency': {
            const config = fields[key].config as FloatConfig

            zobject[key] = z.string().transform((val, ctx) => {
               if (val == '') {
                  if (config.require) {
                     ctx.addIssue({
                        code: z.ZodIssueCode.custom,
                        message: requiredMessage,
                     })
                     return z.NEVER
                  } else {
                     return null
                  }
               }

               const parsed = parseFloat(val.replace('.', '').replace(',', '.'))

               return parsed
            })

            break
         }

         case 'password': {
            const config = fields[key].config as StringConfig

            zobject[key] = z.string()

            if (config.require) {
               zobject[key] = zobject[key].min(1, {
                  message: requiredMessage,
               })
            }

            break
         }

         case 'autocomplete': {
            const config = fields[key].config as TextareaConfig

            zobject[key] = z.string()

            if (config.require) {
               zobject[key] = zobject[key].min(1, {
                  message: requiredMessage,
               })
            }

            break
         }

         case 'file': {
            const config = fields[key].config as TextareaConfig

            zobject[key] = z.string()

            if (config.require) {
               zobject[key] = zobject[key].min(1, {
                  message: requiredMessage,
               })
            }

            break
         }

         case 'textarea': {
            const config = fields[key].config as TextareaConfig

            zobject[key] = z.string()

            if (config.require) {
               zobject[key] = zobject[key].min(1, {
                  message: requiredMessage,
               })
            }

            break
         }

         default: {
            // const config = fields[key].config as StringConfig

            // zobject[key] = z.coerce.string({
            //    required_error: requiredMessage,
            // })

            // if (config.require) {
            //    zobject[key] = zobject[key].min(1, {
            //       message: requiredMessage,
            //    })
            // }
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
