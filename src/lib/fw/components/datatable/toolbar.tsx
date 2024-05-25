import { Eye, ListFilter, Search } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export interface FWDataTableToobarInput {}

const FWDataTableToobar = ({}: FWDataTableToobarInput) => {
   return (
      <div className="flex gap-1.5">
         <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
               type="search"
               placeholder="Pesquisar..."
               className="w-full rounded-lg bg-background pl-8 md:w-[300px] lg:w-[400px]"
            />
         </div>
         <Button variant="ghost" className="px-2">
            <span>Filtros</span>
            <ListFilter className="ml-1" size={14} />
         </Button>
         <Button variant="ghost" className="px-2">
            <span>Exibir</span>
            <Eye className="ml-1" size={14} />
         </Button>
      </div>
   )
}

export default FWDataTableToobar
