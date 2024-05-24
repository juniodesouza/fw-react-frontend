/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import { Fields } from '../../types'
import FWDataTableContent from './content'
import { Button } from '@/components/ui/button'
import FWDataTablePagination from './pagination'
import FWDataTableToobar from './toolbar'

interface FWDataTableInput {
   fields: Fields
   route: string
}

type TableData = Array<{ [key: string]: any }>

interface FWDataTableState {
   data: TableData | []
   filter: {
      query: string
   }
   order: {
      field: string
      by: 'asc' | 'desc'
   }
   pagination: {
      totalRecords: number
      pageSize: number
      currentPage: number
      totalPages: number
   }
}

export interface FWDataTableControl {
   getState: () => FWDataTableState
   setData: (data: TableData) => void
   setPageSize: (value: number) => void
   setPageIndex: (value: number) => void
   previousPage: () => void
   setTotalRecords: (value: number) => void
   setTotalPages: (value: number) => void
   nextPage: () => void
   getCanPreviousPage: () => boolean
   getCanNextPage: () => boolean
}

const FWDataTable = ({ fields, route }: FWDataTableInput) => {
   const [state, setState] = useState<FWDataTableState>({
      data: [],
      order: {
         field: 'id',
         by: 'desc',
      },
      pagination: {
         totalRecords: 0,
         pageSize: 15,
         currentPage: 1,
         totalPages: 1,
      },
      filter: {
         query: '',
      },
   })

   const table: FWDataTableControl = {
      getState: () => state,
      setData: (data) => {
         setState((prevData) => ({
            ...prevData,
            data,
         }))
      },
      setPageSize: (value) => {
         setState((prevData) => ({
            ...prevData,
            pagination: {
               ...prevData.pagination,
               currentPage: 1,
               pageSize: value,
            },
         }))
      },
      setPageIndex: (value) => {
         setState((prevData) => ({
            ...prevData,
            pagination: {
               ...prevData.pagination,
               currentPage: value,
            },
         }))
      },
      previousPage: () => {
         setState((prevData) => ({
            ...prevData,
            pagination: {
               ...prevData.pagination,
               currentPage: prevData.pagination.currentPage - 1,
            },
         }))
      },
      nextPage: () => {
         setState((prevData) => ({
            ...prevData,
            pagination: {
               ...prevData.pagination,
               currentPage: prevData.pagination.currentPage + 1,
            },
         }))
      },
      setTotalRecords: (value) => {
         setState((prevData) => ({
            ...prevData,
            pagination: {
               ...prevData.pagination,
               totalRecords: value,
            },
         }))
      },
      setTotalPages: (value) => {
         setState((prevData) => ({
            ...prevData,
            pagination: {
               ...prevData.pagination,
               totalPages: value,
            },
         }))
      },
      getCanPreviousPage: () => {
         return state.pagination.currentPage > 1
      },
      getCanNextPage: () => {
         return state.pagination.currentPage < state.pagination.totalPages
      },
   }

   const fetchData = () => {
      console.log(route)

      const response = Array.from({ length: state.pagination.pageSize }).map(
         () => {
            const row: { [key: string]: any } = {}
            Object.keys(fields).forEach((key) => {
               row[key] = (Math.random() * 1000).toFixed(2)
            })
            return row
         }
      )

      table.setData(response)
      table.setTotalRecords(1000)
      table.setTotalPages(Math.ceil(1000 / state.pagination.pageSize))
   }

   useEffect(() => {
      fetchData()
   }, [state.pagination.pageSize, state.pagination.currentPage])

   return (
      <>
         <FWDataTableToobar table={table} />
         <FWDataTableContent fields={fields} data={state.data} />
         <FWDataTablePagination table={table} />
         {/* <Button onClick={fetchData}>teste</Button> */}
      </>
   )
}

export default FWDataTable
