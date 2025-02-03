import { CrudEdit, useCrudEdit } from '@/lib/fw'
import CarroModel from './cars.model'
import { useEffect } from 'react'

// Remove the required fields
// Object.keys(CarroModel.fields).forEach((key: any) => {
//    const field = CarroModel.fields[key]
//    field.config.require = false
// })

const CarsEditComponent = () => {
   const {
      setDescription,
      watch,
      getValues,
      setValue,
      getValue,
      beforeSave,
      afterSave,
   } = useCrudEdit()

   useEffect(() => {
      setDescription('Para o cadastramento de novos carros, use esta tela.')

      watch('code', () => {
         const data = getValues()
         console.log(data)
      })

      watch('name', (value) => {
         console.log('name:' + value)
      })

      watch('email', (value) => {
         setValue('description', value)
      })

      watch('cnpj', () => {
         const value = getValue('cnpj')
         console.log('cnpj:' + value)
      })

      beforeSave(async () => {
         console.log('beforeSave')

         await new Promise((resolve) => {
            setTimeout(() => {
               resolve(true)
            }, 500)
         })

         return true
      })

      afterSave(async () => {
         console.log('afterSave')

         await new Promise((resolve) => {
            setTimeout(() => {
               resolve(true)
            }, 500)
         })

         return true
      })
   }, [])

   return <></>
}

export function CarsEdit() {
   return (
      <CrudEdit model={CarroModel}>
         <CarsEditComponent />
      </CrudEdit>
   )
}
