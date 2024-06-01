import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { useForm } from 'react-hook-form'
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { FWDataTableContext, useFWDataTable } from './data-table'
import { useContext } from 'react'

const formSchema = z.object({
   search: z.string(),
})

const FWDataTableToobarSearch = () => {
   const context = useContext(FWDataTableContext)

   if (context === null)
      throw new Error(
         '`FWDataTableToobarSearch` must be used within `FWDataTable`'
      )

   const { search, setSearch } = useFWDataTable()

   const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
         search: search,
      },
   })

   function onSubmit(data: z.infer<typeof formSchema>) {
      setSearch(data.search)
   }

   const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter') {
         form.handleSubmit(onSubmit)()
         event.preventDefault()
      }
   }

   return (
      <Form {...form}>
         <form className="flex-1" onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
               control={form.control}
               name="search"
               render={({ field }) => (
                  <FormItem className="relative">
                     <FormControl>
                        <>
                           <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                           <Input
                              {...field}
                              autoComplete="off"
                              enterKeyHint="search"
                              type="text"
                              placeholder="Pesquisar..."
                              className="w-full rounded-lg bg-background pl-8 md:w-[300px] lg:w-[400px]"
                              onKeyDown={handleKeyDown}
                           />
                        </>
                     </FormControl>
                  </FormItem>
               )}
            />
         </form>
      </Form>
   )
}

export default FWDataTableToobarSearch
