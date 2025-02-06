import { CrudListPage, useCrudList, useCrudLayout } from '@/lib/fw'
import { CarroModel } from './cars.model'
import { useEffect, useLayoutEffect } from 'react'

export function CarsListComponent() {
   const { setDescription } = useCrudLayout()
   const { refreshTable } = useCrudList()

   useLayoutEffect(() => {
      setDescription(
         'Esta tela contém informações detalhadas sobre os carros da empresa'
      )
   }, [])

   useEffect(() => {
      refreshTable((table) => {
         console.log(table.data)
      })
   }, [])

   return null
}

export function CarsList() {
   return (
      <CrudListPage model={CarroModel}>
         <CarsListComponent />
      </CrudListPage>
   )
}
