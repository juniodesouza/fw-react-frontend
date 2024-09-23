import {
   createContext,
   useCallback,
   useContext,
   useEffect,
   useState,
} from 'react'
import { Fields } from '../../types'
import FWDataTableContent from './content'
import FWDataTablePagination from './pagination'
import FWDataTableToobar from './toolbar'

type FWTableData = Array<{ [key: string]: any }>

type FWDataTableState = {
   isLoading: boolean
   data: FWTableData
   search: string
   currentPage: number
   pageSize: number
   totalRecords: number
   totalPages: number
   refresh?: () => void
   setSearch: (search: string) => void
   setCurrentPage: (page: number) => void
   setPageSize: (size: number) => void
}

const FWDataTableContext = createContext<FWDataTableState>({
   isLoading: true,
   data: [],
   search: '',
   currentPage: 0,
   pageSize: 0,
   totalRecords: 0,
   totalPages: 0,
   refresh: () => null,
   setSearch: () => null,
   setCurrentPage: () => null,
   setPageSize: () => null,
})

type onRefreshTable = (table: FWDataTableState) => void

interface FWDataTableInput {
   fields: Fields
   route: string
   onRefreshTable?: onRefreshTable
}

const FWDataTable = ({ fields, onRefreshTable }: FWDataTableInput) => {
   const [isLoading, setLoading] = useState<boolean>(false)
   const [data, setData] = useState<FWTableData>([])
   const [search, setSearch] = useState<string>('')
   const [currentPage, setCurrentPage] = useState<number>(1)
   const [pageSize, setPageSize] = useState<number>(15)
   const [totalRecords, setTotalRecords] = useState<number>(0)
   const [totalPages, setTotalPages] = useState<number>(0)

   const fetchData = useCallback(async (page: number, size: number) => {
      setLoading(true)
      setTimeout(() => {
         const response = Array.from({ length: size }).map(() => {
            const row: { [key: string]: any } = {}
            Object.keys(fields).forEach((key) => {
               row[key] = (Math.random() * 1000).toFixed(2) + page
            })
            return row
         })
         setData(response)
         setTotalRecords(parseInt((Math.random() * 10000).toFixed(2)))
         setTotalPages(Math.ceil(1000 / size))
         setLoading(false)
      }, 100)
   }, [])

   const refresh = () => {
      fetchData(currentPage, pageSize)
   }

   useEffect(() => {
      if (typeof onRefreshTable === 'function') {
         onRefreshTable(table)
      }
   }, [data])

   useEffect(() => {
      setCurrentPage(1)
   }, [search])

   useEffect(() => {
      refresh()
   }, [currentPage, pageSize, search])

   const table: FWDataTableState = {
      isLoading,
      data,
      search,
      currentPage,
      pageSize,
      totalRecords,
      totalPages,
      refresh,
      setSearch,
      setCurrentPage,
      setPageSize,
   }

   return (
      <FWDataTableContext.Provider value={table}>
         <FWDataTableToobar />
         <FWDataTableContent fields={fields} />
         <FWDataTablePagination />
      </FWDataTableContext.Provider>
   )
}

const useFWDataTable = () => {
   const context = useContext(FWDataTableContext)

   if (context === undefined)
      throw new Error('useFWDataTable must be used within FWDataTable')

   return context
}

export default FWDataTable
export { useFWDataTable, FWDataTableContext }
export type { onRefreshTable }
