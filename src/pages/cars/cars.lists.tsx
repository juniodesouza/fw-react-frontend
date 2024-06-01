import { FWCrudList, onRefreshTable } from '@/lib/fw/crud.lists'
import CarroModel from './cars.model'

export function CarsList() {
   const description =
      'Esta tela contém informações detalhadas sobre os carros da empresa'

   const onRefreshTable: onRefreshTable = (table) => {
      console.log(table.data)
   }

   return (
      <FWCrudList
         model={CarroModel}
         description={description}
         onRefreshTable={onRefreshTable}
      />
   )
}
