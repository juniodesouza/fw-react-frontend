import { createContext, useContext, useRef } from 'react'
import { ModelConfig } from '../../types'
import FWDataTable, { onRefreshTable } from '../datatable/data-table'

type CrudListContextProps =
   | {
        refreshTable: (callback: onRefreshTable) => void
     }
   | undefined

const CrudListContext = createContext<CrudListContextProps>(undefined)

interface CrudListInput {
   children: React.ReactNode
   model: ModelConfig
}

const CrudList = ({ children, model }: CrudListInput) => {
   const fields = model.fields

   const refreshTableRef = useRef<onRefreshTable>()

   const refreshTable = (callback: onRefreshTable) => {
      refreshTableRef.current = callback
   }

   const onRefreshTable: onRefreshTable = (table) => {
      if (refreshTableRef.current) {
         refreshTableRef.current(table)
      }
   }

   const contextValue: CrudListContextProps = {
      refreshTable,
   }

   return (
      <CrudListContext.Provider value={contextValue}>
         <FWDataTable
            fields={fields}
            route={model.route}
            onRefreshTable={onRefreshTable}
         />
         {children}
      </CrudListContext.Provider>
   )
}

const useCrudList = () => {
   const context = useContext(CrudListContext)
   if (!context) {
      throw new Error('useCrudList must be used within a CrudListProvider')
   }
   return context
}

export { CrudList, useCrudList }
