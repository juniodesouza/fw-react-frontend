import { ModeToggle } from '@/components/core/theme-toogle'
import {
   BooleanConfig,
   FieldConfig,
   Fields,
   ModelConfig,
   StringConfig,
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
import { Button } from '@/components/custom/button'
import { useState } from 'react'
import { CrudInput } from './crud.input'

interface CrudEditInput {
   model: ModelConfig
}

export function CrudEdit({ model }: CrudEditInput) {
   const [isLoading, setIsLoading] = useState(false)

   const fields = model.fields
   const defaultValues: { [key: string]: any } = {}
   const zobject: { [key: string]: any } = {}
   const requiredMessage = 'Este campo é obrigatório'

   Object.keys(fields).forEach((key: keyof Fields) => {
      const type = fields[key].type
      defaultValues[key] = ''

      switch (type) {
         case 'number': {
            const config = fields[key].config as FieldConfig

            zobject[key] = z.coerce.number({
               required_error: requiredMessage,
            })

            if (config.require) {
               zobject[key] = zobject[key].min(1, {
                  message: requiredMessage,
               })
            }

            break
         }

         case 'boolean': {
            const config = fields[key].config as BooleanConfig
            zobject[key] = z.coerce
               .boolean({
                  required_error: requiredMessage,
               })
               .default(!!config.default)
            break
         }

         case 'date':
            zobject[key] = z.date()
            break

         default: {
            const config = fields[key].config as StringConfig

            zobject[key] = z.coerce.string({
               required_error: requiredMessage,
            })

            if (config.require) {
               zobject[key] = zobject[key].min(1, {
                  message: requiredMessage,
               })
            }
            break
         }
      }

      // | 'number'
      // | 'string'
      // | 'password'
      // | 'autocomplete'
      // | 'select'
      // | 'boolean'
      // | 'date'
      // | 'float'
      // | 'textarea'
      // | 'editor'
      // | 'time'
      // | 'file'

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
      <div className="mx-auto max-w-4xl space-y-4 p-6">
         <ModeToggle />
         <h1 className="text-3xl font-bold">Carros</h1>
         <div className="flex items-center justify-between">
            <Form {...form}>
               <form onSubmit={form.handleSubmit(onSubmit)}>
                  <div className="grid grid-cols-12 gap-3">
                     {Object.keys(fields).map(function (key, idx) {
                        return (
                           <FormField
                              key={idx}
                              control={form.control}
                              name={key}
                              render={({ field }) => (
                                 <FormItem className="col-span-4 space-y-1">
                                    <FormLabel>{fields[key].label}</FormLabel>
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
                     <div className="col-span-12 space-y-1">
                        <Button className="mt-2" loading={isLoading}>
                           Salvar
                        </Button>
                     </div>
                  </div>
               </form>
            </Form>
         </div>
      </div>
   )
}
