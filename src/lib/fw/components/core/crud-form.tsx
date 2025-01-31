import {
   Form,
   FormField,
   FormItem,
   FormLabel,
   FormMessage,
} from '@/components/ui/form'
import { CrudInput } from './crud-input'
import { Button } from '@/components/ui/button'
import { LoaderCircle } from 'lucide-react'
import { Fields } from '../../types'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { formValidator } from '../../validators'
import { zodResolver } from '@hookform/resolvers/zod'

interface CrudFormProps {
   fields: Fields
   defaultValues: { [key: string]: any }
   isLoading?: boolean
   onSubmit: (data: z.infer<z.ZodObject<any, any>>) => void
   onCancel?: () => void
}

const CrudForm = ({
   fields,
   defaultValues,
   isLoading,
   onSubmit,
   onCancel,
}: CrudFormProps) => {
   const formSchema = z.object(formValidator(fields))

   const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: defaultValues,
   })

   return (
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
               <div className="col-span-12 mt-6 flex items-center justify-center gap-4">
                  {onCancel && (
                     <Button
                        type="button"
                        variant="outline"
                        className="w-40"
                        onClick={onCancel}
                     >
                        Cancelar
                     </Button>
                  )}
                  <Button type="submit" className="w-40" disabled={isLoading}>
                     {isLoading && (
                        <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
                     )}
                     Salvar
                  </Button>
               </div>
            </div>
         </form>
      </Form>
   )
}

CrudForm.displayName = 'CrudForm'

export { CrudForm }
