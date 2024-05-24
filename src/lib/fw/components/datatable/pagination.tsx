import {
   Select,
   SelectContent,
   SelectItem,
   SelectTrigger,
   SelectValue,
} from '@/components/ui/select'
import {
   ChevronLeftIcon,
   ChevronRightIcon,
   DoubleArrowLeftIcon,
   DoubleArrowRightIcon,
} from '@radix-ui/react-icons'
import { Button } from '@/components/ui/button'
import { FWDataTableControl } from './data-table'

export interface FWDataTablePaginationInput {
   table: FWDataTableControl
}

const FWDataTablePagination = ({ table }: FWDataTablePaginationInput) => {
   return (
      <div className="flex w-full items-center justify-between px-1">
         <div className="flex-1 text-sm text-muted-foreground">
            {table.getState().pagination.totalRecords} Registros
         </div>

         <div className="flex items-center space-x-8 lg:space-x-10">
            <div className="flex items-center space-x-1">
               <p className="text-sm font-medium">Registros por Página:</p>
               <Select
                  value={table.getState().pagination.pageSize.toString()}
                  onValueChange={(value) => {
                     table.setPageSize(Number(value))
                  }}
               >
                  <SelectTrigger className="h-8 w-[70px]">
                     <SelectValue
                        placeholder={table
                           .getState()
                           .pagination.pageSize.toString()}
                     />
                  </SelectTrigger>
                  <SelectContent side="top">
                     {[15, 30, 45, 60].map((pageSize) => (
                        <SelectItem key={pageSize} value={`${pageSize}`}>
                           {pageSize}
                        </SelectItem>
                     ))}
                  </SelectContent>
               </Select>
            </div>
            <div className="flex items-center space-x-2">
               <Button
                  variant="outline"
                  className="hidden h-8 w-8 p-0 lg:flex"
                  onClick={() => table.setPageIndex(0)}
                  disabled={!table.getCanPreviousPage()}
               >
                  <span className="sr-only">Primeira página</span>
                  <DoubleArrowLeftIcon className="h-4 w-4" />
               </Button>
               <Button
                  variant="outline"
                  className="h-8 w-8 p-0"
                  onClick={() => table.previousPage()}
                  disabled={!table.getCanPreviousPage()}
               >
                  <span className="sr-only">Página anterior</span>
                  <ChevronLeftIcon className="h-4 w-4" />
               </Button>

               <div className="text-sm font-medium">
                  Página {table.getState().pagination.currentPage} de{' '}
                  {table.getState().pagination.totalPages}
               </div>

               <Button
                  variant="outline"
                  className="h-8 w-8 p-0"
                  onClick={() => table.nextPage()}
                  disabled={!table.getCanNextPage()}
               >
                  <span className="sr-only">Próxima página</span>
                  <ChevronRightIcon className="h-4 w-4" />
               </Button>
               <Button
                  variant="outline"
                  className="hidden h-8 w-8 p-0 lg:flex"
                  onClick={() =>
                     table.setPageIndex(table.getState().pagination.totalPages)
                  }
                  disabled={!table.getCanNextPage()}
               >
                  <span className="sr-only">Última página</span>
                  <DoubleArrowRightIcon className="h-4 w-4" />
               </Button>
            </div>
         </div>
      </div>
   )
}

export default FWDataTablePagination
