import { useCallback, useEffect, useState } from 'react'
import { Fields } from '../../types'
import FWDataTableContent from './content'
import FWDataTablePagination from './pagination'
import FWDataTableToobar from './toolbar'

interface FWDataTableInput {
   fields: Fields
   route: string
}

type TableData = Array<{ [key: string]: any }>

interface FWPaginatorState {
   totalRecords: number
   pageSize: number
   currentPage: number
   totalPages: number
}

// interface FWSortState {
//    field: string
//    by: 'asc' | 'desc'
// }

// interface FWDataTableState {
//    data: TableData | []
//    filter: {
//       query: string
//    }
//    order: {
//       field: string
//       by: 'asc' | 'desc'
//    }
//    pagination: {
//       totalRecords: number
//       pageSize: number
//       currentPage: number
//       totalPages: number
//    }
// }

const FWDataTable = ({ fields }: FWDataTableInput) => {
   const [data, setData] = useState<TableData>([])

   const [pagination, setPagination] = useState<FWPaginatorState>({
      totalRecords: 0,
      pageSize: 15,
      currentPage: 1,
      totalPages: 1,
   })

   const handlePageChange = (value: number) => {
      setPagination((prevData) => ({
         ...prevData,
         currentPage: value,
      }))
   }

   const handlePageSizeChange = (value: number) => {
      setPagination((prevData) => ({
         ...prevData,
         currentPage: 1,
         pageSize: value,
      }))
   }

   const fetchData = useCallback(
      async (page: number, size: number) => {
         const response = Array.from({ length: size }).map(() => {
            const row: { [key: string]: any } = {}
            Object.keys(fields).forEach((key) => {
               row[key] = (Math.random() * 1000).toFixed(2) + page
            })
            return row
         })

         setData(response)
         setPagination((prevData) => ({
            ...prevData,
            totalRecords: parseInt((Math.random() * 10000).toFixed(2)),
            totalPages: Math.ceil(1000 / prevData.pageSize),
         }))
      },
      [fields]
   )

   useEffect(() => {
      fetchData(pagination.currentPage, pagination.pageSize)
   }, [pagination.currentPage, pagination.pageSize, fetchData])

   // const [state, setState] = useState<FWDataTableState>({
   //    data: [],
   //    order: {
   //       field: 'id',
   //       by: 'desc',
   //    },
   //    pagination: {
   //       totalRecords: 0,
   //       pageSize: 15,
   //       currentPage: 1,
   //       totalPages: 1,
   //    },
   //    filter: {
   //       query: '',
   //    },
   // })

   return (
      <>
         <FWDataTableToobar />
         <FWDataTableContent fields={fields} data={data} />
         <FWDataTablePagination
            onPageChange={handlePageChange}
            onPageSizeChange={handlePageSizeChange}
            {...pagination}
         />
      </>
   )
}

export default FWDataTable
