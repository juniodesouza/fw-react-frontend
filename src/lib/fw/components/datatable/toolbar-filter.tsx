// import { Button } from '@/components/ui/button'
import { ListFilter } from 'lucide-react'
import { useContext } from 'react'
import { FWDataTableContext } from './data-table'

const FWDataTableToobarFilter = () => {
   const context = useContext(FWDataTableContext)

   if (context === null)
      throw new Error(
         '`FWDataTableToobarFilter` must be used within `FWDataTable`'
      )

   return (
      <></>
      // <Button variant="ghost">
      //    <span>Filtrar</span>
      //    <ListFilter className="ml-1" size={14} />
      // </Button>
   )
}

export default FWDataTableToobarFilter
