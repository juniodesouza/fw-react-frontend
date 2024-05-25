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

export interface FWDataTablePaginationInput {
   currentPage: number
   pageSize: number
   totalRecords: number
   totalPages: number
   onPageChange: (value: number) => void
   onPageSizeChange: (value: number) => void
}

const FWDataTablePagination = ({
   currentPage,
   pageSize,
   totalRecords,
   totalPages,
   onPageChange,
   onPageSizeChange,
}: FWDataTablePaginationInput) => {
   return (
      <div className="flex w-full items-center justify-between px-1">
         <div className="flex-1 text-sm text-muted-foreground">
            {totalRecords} Registros
         </div>

         <div className="flex items-center space-x-8 lg:space-x-10">
            <div className="flex items-center space-x-1">
               <p className="text-sm font-medium">Registros por Página:</p>
               <Select
                  value={pageSize.toString()}
                  onValueChange={(value) => {
                     onPageSizeChange(Number(value))
                  }}
               >
                  <SelectTrigger className="h-8 w-[70px]">
                     <SelectValue placeholder={pageSize.toString()} />
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
                  onClick={() => onPageChange(1)}
                  disabled={currentPage === 1}
               >
                  <span className="sr-only">Primeira página</span>
                  <DoubleArrowLeftIcon className="h-4 w-4" />
               </Button>
               <Button
                  variant="outline"
                  className="h-8 w-8 p-0"
                  onClick={() => onPageChange(currentPage - 1)}
                  disabled={currentPage === 1}
               >
                  <span className="sr-only">Página anterior</span>
                  <ChevronLeftIcon className="h-4 w-4" />
               </Button>

               <div className="text-sm font-medium">
                  Página {currentPage} de {totalPages}
               </div>

               <Button
                  variant="outline"
                  className="h-8 w-8 p-0"
                  onClick={() => onPageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
               >
                  <span className="sr-only">Próxima página</span>
                  <ChevronRightIcon className="h-4 w-4" />
               </Button>
               <Button
                  variant="outline"
                  className="hidden h-8 w-8 p-0 lg:flex"
                  onClick={() => onPageChange(totalPages)}
                  disabled={currentPage === totalPages}
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
