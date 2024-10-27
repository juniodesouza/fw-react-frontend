// import {
//    Select,
//    SelectContent,
//    SelectItem,
//    SelectTrigger,
//    SelectValue,
// } from '@/components/ui/select'
// import {
//    ChevronLeftIcon,
//    ChevronRightIcon,
//    DoubleArrowLeftIcon,
//    DoubleArrowRightIcon,
// } from '@radix-ui/react-icons'
// import { Button } from '@/components/ui/button'
import { FWDataTableContext, useFWDataTable } from './data-table'
import { useContext } from 'react'
// import { Skeleton } from '@/components/ui/skeleton'

const FWDataTablePagination = () => {
   const context = useContext(FWDataTableContext)

   if (context === null)
      throw new Error(
         '`FWDataTablePagination` must be used within `FWDataTable`'
      )

   const {
      isLoading,
      totalRecords,
      pageSize,
      currentPage,
      totalPages,
      setCurrentPage,
      setPageSize,
   } = useFWDataTable()

   return (
      <div className="flex w-full items-center justify-between px-1">
         {/* <div className="flex-1 text-sm text-muted-foreground">
            {isLoading ? (
               <Skeleton className="h-4 w-[95px]" />
            ) : (
               <>{totalRecords} Registros</>
            )}
         </div>

         <div className="flex items-center space-x-8 lg:space-x-10">
            <div className="flex items-center space-x-1">
               <p className="text-sm font-medium">Registros por Página:</p>
               <Select
                  value={pageSize.toString()}
                  disabled={isLoading}
                  onValueChange={(value) => {
                     setPageSize(Number(value))
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
                  onClick={() => setCurrentPage(1)}
                  disabled={isLoading || currentPage === 1}
               >
                  <span className="sr-only">Primeira página</span>
                  <DoubleArrowLeftIcon className="h-4 w-4" />
               </Button>
               <Button
                  variant="outline"
                  className="h-8 w-8 p-0"
                  onClick={() => setCurrentPage(currentPage - 1)}
                  disabled={isLoading || currentPage === 1}
               >
                  <span className="sr-only">Página anterior</span>
                  <ChevronLeftIcon className="h-4 w-4" />
               </Button>

               {isLoading ? (
                  <Skeleton className="h-4 w-[95px]" />
               ) : (
                  <div className="text-sm font-medium">
                     Página {currentPage} de {totalPages}
                  </div>
               )}

               <Button
                  variant="outline"
                  className="h-8 w-8 p-0"
                  onClick={() => setCurrentPage(currentPage + 1)}
                  disabled={isLoading || currentPage === totalPages}
               >
                  <span className="sr-only">Próxima página</span>
                  <ChevronRightIcon className="h-4 w-4" />
               </Button>
               <Button
                  variant="outline"
                  className="hidden h-8 w-8 p-0 lg:flex"
                  onClick={() => setCurrentPage(totalPages)}
                  disabled={isLoading || currentPage === totalPages}
               >
                  <span className="sr-only">Última página</span>
                  <DoubleArrowRightIcon className="h-4 w-4" />
               </Button>
            </div>
         </div> */}
      </div>
   )
}

export default FWDataTablePagination
