import { ModeToggle } from '@/components/layout/theme-toogle'
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
import { Card, CardContent } from '@/components/ui/card'

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
      <div className="space-y-4 px-4 py-8">
         <div>
            <h1 className="text-3xl font-bold">Carros</h1>
            <p className="text-sm text-muted-foreground italic">
               O relatório contém informações detalhadas sobre os carros da
               empresa
            </p>
         </div>
         <Card className="rounded-sm">
            <CardContent>
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
                        <div className="col-span-12 space-y-1">
                           <Button className="mt-2" loading={isLoading}>
                              Salvar
                           </Button>
                        </div>
                     </div>
                  </form>
               </Form>
            </CardContent>
         </Card>
         {/* </CardContent>
         </Card> */}

         {/* <div className="mx-auto grid w-full max-w-6xl gap-2"> */}
         {/* <h1 className="text-3xl font-semibold">Carros</h1>
               </div>
               <Card>
                  <CardHeader>
                     <CardTitle>
                        <h1 className="text-3xl font-bold">Carros</h1>
                     </CardTitle>
                     <CardDescription>
                        Manage your products and view their sales performance.
                     </CardDescription>
                  </CardHeader>
                  <CardContent>
                     <Outlet />
                  </CardContent>
               </Card> */}
         {/* <Tabs defaultValue="all">
                  <div className="flex items-center">
                     <TabsList>
                        <TabsTrigger value="all">All</TabsTrigger>
                        <TabsTrigger value="active">Active</TabsTrigger>
                        <TabsTrigger value="draft">Draft</TabsTrigger>
                        <TabsTrigger
                           value="archived"
                           className="hidden sm:flex"
                        >
                           Archived
                        </TabsTrigger>
                     </TabsList>
                     <div className="ml-auto flex items-center gap-2">
                        <DropdownMenu>
                           <DropdownMenuTrigger asChild>
                              <Button
                                 variant="outline"
                                 size="sm"
                                 className="h-7 gap-1"
                              >
                                 <ListFilter className="h-3.5 w-3.5" />
                                 <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                                    Filter
                                 </span>
                              </Button>
                           </DropdownMenuTrigger>
                           <DropdownMenuContent align="end">
                              <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                              <DropdownMenuSeparator />
                              <DropdownMenuCheckboxItem checked>
                                 Active
                              </DropdownMenuCheckboxItem>
                              <DropdownMenuCheckboxItem>
                                 Draft
                              </DropdownMenuCheckboxItem>
                              <DropdownMenuCheckboxItem>
                                 Archived
                              </DropdownMenuCheckboxItem>
                           </DropdownMenuContent>
                        </DropdownMenu>
                        <Button
                           size="sm"
                           variant="outline"
                           className="h-7 gap-1"
                        >
                           <File className="h-3.5 w-3.5" />
                           <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                              Export
                           </span>
                        </Button>
                        <Button size="sm" className="gap-1">
                           <PlusCircle className="h-3.5 w-3.5" />
                           <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                              Add Product
                           </span>
                        </Button>
                     </div>
                  </div>
                  <TabsContent value="all">
                     <Card x-chunk="dashboard-06-chunk-0">
                        <CardHeader>
                           <CardTitle>Products</CardTitle>
                           <CardDescription>
                              Manage your products and view their sales
                              performance.
                           </CardDescription>
                        </CardHeader>
                        <CardContent>
                           <Table>
                              <TableHeader>
                                 <TableRow>
                                    <TableHead className="hidden w-[100px] sm:table-cell">
                                       <span className="sr-only">img</span>
                                    </TableHead>
                                    <TableHead>Name</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead>Price</TableHead>
                                    <TableHead className="hidden md:table-cell">
                                       Total Sales
                                    </TableHead>
                                    <TableHead className="hidden md:table-cell">
                                       Created at
                                    </TableHead>
                                    <TableHead>
                                       <span className="sr-only">Actions</span>
                                    </TableHead>
                                 </TableRow>
                              </TableHeader>
                              <TableBody>
                                 <TableRow>
                                    <TableCell className="hidden sm:table-cell">
                                       <img
                                          alt="Product img"
                                          className="aspect-square rounded-md object-cover"
                                          height="64"
                                          src="/placeholder.svg"
                                          width="64"
                                       />
                                    </TableCell>
                                    <TableCell className="font-medium">
                                       Laser Lemonade Machine
                                    </TableCell>
                                    <TableCell>
                                       <Badge variant="outline">Draft</Badge>
                                    </TableCell>
                                    <TableCell>$499.99</TableCell>
                                    <TableCell className="hidden md:table-cell">
                                       25
                                    </TableCell>
                                    <TableCell className="hidden md:table-cell">
                                       2023-07-12 10:42 AM
                                    </TableCell>
                                    <TableCell>
                                       <DropdownMenu>
                                          <DropdownMenuTrigger asChild>
                                             <Button
                                                aria-haspopup="true"
                                                size="icon"
                                                variant="ghost"
                                             >
                                                <MoreHorizontal className="h-4 w-4" />
                                                <span className="sr-only">
                                                   Toggle menu
                                                </span>
                                             </Button>
                                          </DropdownMenuTrigger>
                                          <DropdownMenuContent align="end">
                                             <DropdownMenuLabel>
                                                Actions
                                             </DropdownMenuLabel>
                                             <DropdownMenuItem>
                                                Edit
                                             </DropdownMenuItem>
                                             <DropdownMenuItem>
                                                Delete
                                             </DropdownMenuItem>
                                          </DropdownMenuContent>
                                       </DropdownMenu>
                                    </TableCell>
                                 </TableRow>
                                 <TableRow>
                                    <TableCell className="hidden sm:table-cell">
                                       <img
                                          alt="Product img"
                                          className="aspect-square rounded-md object-cover"
                                          height="64"
                                          src="/placeholder.svg"
                                          width="64"
                                       />
                                    </TableCell>
                                    <TableCell className="font-medium">
                                       Hypernova Headphones
                                    </TableCell>
                                    <TableCell>
                                       <Badge variant="outline">Active</Badge>
                                    </TableCell>
                                    <TableCell>$129.99</TableCell>
                                    <TableCell className="hidden md:table-cell">
                                       100
                                    </TableCell>
                                    <TableCell className="hidden md:table-cell">
                                       2023-10-18 03:21 PM
                                    </TableCell>
                                    <TableCell>
                                       <DropdownMenu>
                                          <DropdownMenuTrigger asChild>
                                             <Button
                                                aria-haspopup="true"
                                                size="icon"
                                                variant="ghost"
                                             >
                                                <MoreHorizontal className="h-4 w-4" />
                                                <span className="sr-only">
                                                   Toggle menu
                                                </span>
                                             </Button>
                                          </DropdownMenuTrigger>
                                          <DropdownMenuContent align="end">
                                             <DropdownMenuLabel>
                                                Actions
                                             </DropdownMenuLabel>
                                             <DropdownMenuItem>
                                                Edit
                                             </DropdownMenuItem>
                                             <DropdownMenuItem>
                                                Delete
                                             </DropdownMenuItem>
                                          </DropdownMenuContent>
                                       </DropdownMenu>
                                    </TableCell>
                                 </TableRow>
                                 <TableRow>
                                    <TableCell className="hidden sm:table-cell">
                                       <img
                                          alt="Product img"
                                          className="aspect-square rounded-md object-cover"
                                          height="64"
                                          src="/placeholder.svg"
                                          width="64"
                                       />
                                    </TableCell>
                                    <TableCell className="font-medium">
                                       AeroGlow Desk Lamp
                                    </TableCell>
                                    <TableCell>
                                       <Badge variant="outline">Active</Badge>
                                    </TableCell>
                                    <TableCell>$39.99</TableCell>
                                    <TableCell className="hidden md:table-cell">
                                       50
                                    </TableCell>
                                    <TableCell className="hidden md:table-cell">
                                       2023-11-29 08:15 AM
                                    </TableCell>
                                    <TableCell>
                                       <DropdownMenu>
                                          <DropdownMenuTrigger asChild>
                                             <Button
                                                aria-haspopup="true"
                                                size="icon"
                                                variant="ghost"
                                             >
                                                <MoreHorizontal className="h-4 w-4" />
                                                <span className="sr-only">
                                                   Toggle menu
                                                </span>
                                             </Button>
                                          </DropdownMenuTrigger>
                                          <DropdownMenuContent align="end">
                                             <DropdownMenuLabel>
                                                Actions
                                             </DropdownMenuLabel>
                                             <DropdownMenuItem>
                                                Edit
                                             </DropdownMenuItem>
                                             <DropdownMenuItem>
                                                Delete
                                             </DropdownMenuItem>
                                          </DropdownMenuContent>
                                       </DropdownMenu>
                                    </TableCell>
                                 </TableRow>
                                 <TableRow>
                                    <TableCell className="hidden sm:table-cell">
                                       <img
                                          alt="Product img"
                                          className="aspect-square rounded-md object-cover"
                                          height="64"
                                          src="/placeholder.svg"
                                          width="64"
                                       />
                                    </TableCell>
                                    <TableCell className="font-medium">
                                       TechTonic Energy Drink
                                    </TableCell>
                                    <TableCell>
                                       <Badge variant="secondary">Draft</Badge>
                                    </TableCell>
                                    <TableCell>$2.99</TableCell>
                                    <TableCell className="hidden md:table-cell">
                                       0
                                    </TableCell>
                                    <TableCell className="hidden md:table-cell">
                                       2023-12-25 11:59 PM
                                    </TableCell>
                                    <TableCell>
                                       <DropdownMenu>
                                          <DropdownMenuTrigger asChild>
                                             <Button
                                                aria-haspopup="true"
                                                size="icon"
                                                variant="ghost"
                                             >
                                                <MoreHorizontal className="h-4 w-4" />
                                                <span className="sr-only">
                                                   Toggle menu
                                                </span>
                                             </Button>
                                          </DropdownMenuTrigger>
                                          <DropdownMenuContent align="end">
                                             <DropdownMenuLabel>
                                                Actions
                                             </DropdownMenuLabel>
                                             <DropdownMenuItem>
                                                Edit
                                             </DropdownMenuItem>
                                             <DropdownMenuItem>
                                                Delete
                                             </DropdownMenuItem>
                                          </DropdownMenuContent>
                                       </DropdownMenu>
                                    </TableCell>
                                 </TableRow>
                                 <TableRow>
                                    <TableCell className="hidden sm:table-cell">
                                       <img
                                          alt="Product img"
                                          className="aspect-square rounded-md object-cover"
                                          height="64"
                                          src="/placeholder.svg"
                                          width="64"
                                       />
                                    </TableCell>
                                    <TableCell className="font-medium">
                                       Gamer Gear Pro Controller
                                    </TableCell>
                                    <TableCell>
                                       <Badge variant="outline">Active</Badge>
                                    </TableCell>
                                    <TableCell>$59.99</TableCell>
                                    <TableCell className="hidden md:table-cell">
                                       75
                                    </TableCell>
                                    <TableCell className="hidden md:table-cell">
                                       2024-01-01 12:00 AM
                                    </TableCell>
                                    <TableCell>
                                       <DropdownMenu>
                                          <DropdownMenuTrigger asChild>
                                             <Button
                                                aria-haspopup="true"
                                                size="icon"
                                                variant="ghost"
                                             >
                                                <MoreHorizontal className="h-4 w-4" />
                                                <span className="sr-only">
                                                   Toggle menu
                                                </span>
                                             </Button>
                                          </DropdownMenuTrigger>
                                          <DropdownMenuContent align="end">
                                             <DropdownMenuLabel>
                                                Actions
                                             </DropdownMenuLabel>
                                             <DropdownMenuItem>
                                                Edit
                                             </DropdownMenuItem>
                                             <DropdownMenuItem>
                                                Delete
                                             </DropdownMenuItem>
                                          </DropdownMenuContent>
                                       </DropdownMenu>
                                    </TableCell>
                                 </TableRow>
                                 <TableRow>
                                    <TableCell className="hidden sm:table-cell">
                                       <img
                                          alt="Product img"
                                          className="aspect-square rounded-md object-cover"
                                          height="64"
                                          src="/placeholder.svg"
                                          width="64"
                                       />
                                    </TableCell>
                                    <TableCell className="font-medium">
                                       Luminous VR Headset
                                    </TableCell>
                                    <TableCell>
                                       <Badge variant="outline">Active</Badge>
                                    </TableCell>
                                    <TableCell>$199.99</TableCell>
                                    <TableCell className="hidden md:table-cell">
                                       30
                                    </TableCell>
                                    <TableCell className="hidden md:table-cell">
                                       2024-02-14 02:14 PM
                                    </TableCell>
                                    <TableCell>
                                       <DropdownMenu>
                                          <DropdownMenuTrigger asChild>
                                             <Button
                                                aria-haspopup="true"
                                                size="icon"
                                                variant="ghost"
                                             >
                                                <MoreHorizontal className="h-4 w-4" />
                                                <span className="sr-only">
                                                   Toggle menu
                                                </span>
                                             </Button>
                                          </DropdownMenuTrigger>
                                          <DropdownMenuContent align="end">
                                             <DropdownMenuLabel>
                                                Actions
                                             </DropdownMenuLabel>
                                             <DropdownMenuItem>
                                                Edit
                                             </DropdownMenuItem>
                                             <DropdownMenuItem>
                                                Delete
                                             </DropdownMenuItem>
                                          </DropdownMenuContent>
                                       </DropdownMenu>
                                    </TableCell>
                                 </TableRow>
                              </TableBody>
                           </Table>
                        </CardContent>shadcn@example.com
                        <CardFooter>
                           <div className="text-xs text-muted-foreground">
                              Showing <strong>1-10</strong> of{' '}
                              <strong>32</strong> products
                           </div>
                        </CardFooter>
                     </Card>
                  </TabsContent>
               </Tabs> */}
      </div>
   )
}
