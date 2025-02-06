import {
   Table,
   TableBody,
   TableCell,
   TableHead,
   TableHeader,
   TableRow,
} from '@/components/ui/table'
import { Fields } from '../../types'
import { FWDataTableContext, useFWDataTable } from './data-table'
import { Skeleton } from '@/components/ui/skeleton'
import { useContext } from 'react'

interface FWDataTableContentInput {
   fields: Fields
}

const FWDataTableContent = ({ fields }: FWDataTableContentInput) => {
   const context = useContext(FWDataTableContext)

   if (context === null)
      throw new Error('`FWDataTableContent` must be used within `FWDataTable`')

   const { isLoading, data } = useFWDataTable()

   return (
      <div className="my-3 rounded-md border">
         <Table>
            <TableHeader>
               <TableRow className="bg-muted/40">
                  {Object.keys(fields).map((key, idx) => {
                     if (fields[key].config.list) {
                        return (
                           <TableHead key={idx}>{fields[key].label}</TableHead>
                        )
                     }
                  })}
               </TableRow>
            </TableHeader>
            <TableBody>
               {isLoading
                  ? Array(5).map((_, index) => (
                       <TableRow key={index} className="even:bg-muted/40">
                          {Object.keys(fields).map((key, idx) => {
                             if (fields[key].config.list) {
                                return (
                                   <TableCell key={idx}>
                                      <Skeleton className="w-100 h-4" />
                                   </TableCell>
                                )
                             }
                          })}
                       </TableRow>
                    ))
                  : data.map((_, index) => (
                       <TableRow key={index} className="even:bg-muted/40">
                          {Object.keys(fields).map((key, idx) => {
                             if (fields[key].config.list) {
                                return (
                                   <TableCell key={idx}>
                                      {data[index][key]}
                                   </TableCell>
                                )
                             }
                          })}
                       </TableRow>
                    ))}
            </TableBody>
         </Table>
      </div>
   )
}

export default FWDataTableContent
