import FWDataTableToobarSearch from './toolbar-search'
import FWDataTableToobarFilter from './toolbar-filter'
import FWDataTableToobarOptions from './toolbar-options'
import { useContext } from 'react'
import { FWDataTableContext } from './data-table'

const FWDataTableToobar = () => {
   const context = useContext(FWDataTableContext)

   if (context === null)
      throw new Error('`FWDataTableToobar` must be used within `FWDataTable`')

   return (
      <div className="flex gap-1.5">
         <FWDataTableToobarSearch />
         <FWDataTableToobarFilter />
         <FWDataTableToobarOptions />
      </div>
   )
}

export default FWDataTableToobar
