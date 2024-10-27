import {
   BooleanConfig,
   Fields,
   ModelConfig,
   NumberConfig,
   SelectConfig,
   StringConfig,
} from './types'
import { useForm, Controller } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect, useState } from 'react'
import { CrudInput } from './crud.input'
import { Card } from 'primereact/card'
import { Button } from 'primereact/button'
import FWBreadcrumb from '@/components/layout/breadcrumb/breadcrumb'
import { Link } from 'react-router-dom'

interface CrudEditInput {
   model: ModelConfig
   description?: string
}

const FWCrudEdit = ({ model, description }: CrudEditInput) => {
   const [isLoading, setIsLoading] = useState(false)

   // | 'number'
   // | 'string'
   // | 'password'
   // | 'autocomplete'
   // | 'select'
   // | 'boolean'
   // | 'date'
   // | 'float'
   // | 'textarea'
   // | 'texteditor'
   // | 'time'
   // | 'file'

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

         case 'date':
            // zobject[key] = z.date()
            break

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

      // if (config.require) {
      //    zobject[key].min(1, {
      //       message: 'Este campo é obrigatório',
      //    })
      // }

      // zobject[key] = z.string().min(1, {
      //    message: 'Este campo é obrigatório',
      // })
   })

   const formSchema = z.object(zobject)
   const {
      handleSubmit,
      formState: { errors },
      control,
   } = useForm<z.infer<typeof formSchema>>({
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

   useEffect(() => {
      console.log(errors)
   }, [errors])

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
            <Button className="px-4">Exportar</Button>
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

            <Card className="rounded-sm">
               <div className="pt-6">
                  <form onSubmit={handleSubmit(onSubmit)}>
                     <div className="grid grid-cols-12 gap-4">
                        {Object.keys(fields).map(function (key, idx) {
                           if (!fields[key].edit) return null
                           return (
                              <Controller
                                 key={idx}
                                 control={control}
                                 name={key}
                                 render={({ field }) => (
                                    <div
                                       className={`space-y-0 col-span-${fields[key]?.config.size || '4'}`}
                                    >
                                       <label>{fields[key].label}</label>
                                       <CrudInput
                                          id={key}
                                          field={fields[key]}
                                          props={field}
                                          invalid={!!errors[key]}
                                       />
                                       {errors && errors[key] && (
                                          <p className="text-[0.8rem] text-destructive">
                                             {String(errors[key].message)}
                                          </p>
                                       )}
                                    </div>
                                 )}
                              />
                           )
                        })}
                        <div className="col-span-12 mt-6 flex items-center justify-center gap-4">
                           <Button type="button" className="w-40">
                              <Link to={`/app/${model.route}`}>Voltar</Link>
                           </Button>

                           <Button
                              type="submit"
                              className="w-40"
                              disabled={isLoading}
                           >
                              {isLoading && (
                                 <i className="pi pi-spin pi-spinner mr-2 h-4 w-4" />
                              )}
                              Salvar
                           </Button>
                        </div>
                     </div>
                  </form>
               </div>
            </Card>
         </div>
      </div>
   )
}

export { FWCrudEdit }
