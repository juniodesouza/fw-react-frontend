import { PlusCircle, Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
   Table,
   TableBody,
   TableCell,
   TableHead,
   TableHeader,
   TableRow,
} from '@/components/ui/table'
import {
   Dialog,
   DialogClose,
   DialogContent,
   DialogDescription,
   DialogFooter,
   DialogHeader,
   DialogTitle,
   DialogTrigger,
} from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import { ModeToggle } from '@/components/core/theme-toogle'
import { ModelConfig } from './types'

interface CrudListInput {
   model: ModelConfig
}

export function CrudList({ model }: CrudListInput) {
   console.log(model)

   return (
      <div className="mx-auto max-w-4xl space-y-4 p-6">
         <ModeToggle />
         <h1 className="text-3xl font-bold">Carros</h1>
         <div className="flex items-center justify-between">
            <form className="flex items-center gap-2">
               <Input name="id" placeholder="ID do produto" />
               <Input name="name" placeholder="Nome do produto" />
               <Button type="submit" variant="link">
                  <Search className="mr-2 h-4 w-3" />
                  Buscar
               </Button>
            </form>
            <Dialog>
               <DialogTrigger asChild>
                  <Button>
                     <PlusCircle className="mr-2 h-4 w-3" />
                     Novo produto
                  </Button>
               </DialogTrigger>

               <DialogContent>
                  <DialogHeader>
                     <DialogTitle>Novo produto</DialogTitle>
                     <DialogDescription>
                        Cadastrar novo produto no sistema
                     </DialogDescription>
                  </DialogHeader>

                  <form
                     action=""
                     className="items-center gap-3 space-y-6 text-right"
                  >
                     <div className="grid grid-cols-4 items-center gap-3 text-right">
                        <Label htmlFor="name">Nome</Label>
                        <Input className="col-span-3" id="name" />
                     </div>
                     <div className="grid grid-cols-4 items-center gap-3 text-right">
                        <Label htmlFor="price">Preço</Label>
                        <Input className="col-span-3" id="price" />
                     </div>
                     <DialogFooter>
                        <DialogClose asChild>
                           <Button type="button" variant="outline">
                              Cancelar
                           </Button>
                        </DialogClose>
                        <Button type="submit">Salvar</Button>
                     </DialogFooter>
                  </form>
               </DialogContent>
            </Dialog>
         </div>
         <div className="rounded-lg border p-2">
            <Table>
               <TableHeader>
                  <TableRow>
                     <TableHead>Id</TableHead>
                     <TableHead>Produto</TableHead>
                     <TableHead>Preço</TableHead>
                  </TableRow>
               </TableHeader>
               <TableBody>
                  {Array.from({ length: 10 }).map((_, index) => (
                     <TableRow key={index}>
                        <TableCell>{index + 1}</TableCell>
                        <TableCell>Produto {index + 1}</TableCell>
                        <TableCell>R$ 100,00</TableCell>
                     </TableRow>
                  ))}
               </TableBody>
            </Table>
         </div>
      </div>
   )
}
