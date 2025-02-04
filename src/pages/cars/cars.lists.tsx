import { CrudLayout, CrudList, useCrudLayout, useCrudList } from '@/lib/fw'
import CarroModel from './cars.model'
import { useEffect } from 'react'

export function CarsListComponent() {
   const { setDescription } = useCrudLayout()

   const { refreshTable } = useCrudList()

   useEffect(() => {
      setDescription(
         'Esta tela contém informações detalhadas sobre os carros da empresa'
      )

      refreshTable((table) => {
         console.log(table.data)
      })
   }, [])

   return null
}

export function CarsList() {
   return (
      <CrudLayout title={CarroModel.label}>
         <CrudList model={CarroModel}>
            <CarsListComponent />
         </CrudList>
      </CrudLayout>
   )
}
