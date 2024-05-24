import {
   Table,
   TableBody,
   TableCell,
   TableHead,
   TableHeader,
   TableRow,
} from '@/components/ui/table'
import { Fields } from '../../types'

interface FWDataTableContentInput {
   fields: Fields
   data: Array<{ [key: string]: any }>
}

const FWDataTableContent = ({ fields, data }: FWDataTableContentInput) => {
   return (
      <div className="my-3 rounded-md border">
         <Table>
            <TableHeader>
               <TableRow className="bg-muted/40">
                  {Object.keys(fields).map((key, idx) => {
                     if (fields[key].list) {
                        return (
                           <TableHead key={idx}>{fields[key].label}</TableHead>
                        )
                     }
                  })}
               </TableRow>
            </TableHeader>
            <TableBody>
               {data.map((_, index) => (
                  <TableRow key={index} className="even:bg-muted/40">
                     {Object.keys(fields).map((key, idx) => {
                        if (fields[key].list) {
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
