import { Button } from '@/components/ui/button'
import { Eye } from 'lucide-react'
import { useContext } from 'react'
import { FWDataTableContext } from './data-table'
import {
   Dialog,
   DialogContent,
   DialogDescription,
   // DialogFooter,
   DialogHeader,
   DialogTitle,
   DialogTrigger,
} from '@/components/ui/dialog'
// import { DialogClose } from '@radix-ui/react-dialog'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'

const FWDataTableToobarOptions = () => {
   const context = useContext(FWDataTableContext)

   if (context === null)
      throw new Error(
         '`FWDataTableToobarFilter` must be used within `FWDataTable`'
      )

   return (
      <Dialog>
         <DialogTrigger asChild>
            <Button variant="ghost">
               <span>Exibir</span>
               <Eye className="ml-1" size={14} />
            </Button>
         </DialogTrigger>
         <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
               <DialogTitle>Preferências</DialogTitle>
               <DialogDescription>
                  Configure as colunas visíveis da tela
               </DialogDescription>
            </DialogHeader>
            <div>
               <div className="flex flex-row items-center justify-between p-2">
                  <Label htmlFor="codigo">Código</Label>
                  <Switch id="codigo" />
               </div>
               <Separator className="mb-1" />

               <div className="flex flex-row items-center justify-between p-2">
                  <Label htmlFor="nome">Nome</Label>
                  <Switch id="nome" />
               </div>
               <Separator className="mb-1" />

               <div className="flex flex-row items-center justify-between p-2">
                  <Label htmlFor="marca">Marca</Label>
                  <Switch id="marca" />
               </div>
            </div>
            {/* <DialogFooter>
               <DialogClose asChild>
                  <Button type="button" variant="outline">
                     Cancelar
                  </Button>
               </DialogClose>
               <Button type="submit">Salvar</Button>
            </DialogFooter> */}
         </DialogContent>
      </Dialog>
   )
}

export default FWDataTableToobarOptions
