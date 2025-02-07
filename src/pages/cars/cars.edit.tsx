import {
   CrudEditPage,
   StringConfig,
   useCrudEdit,
   useCrudLayout,
} from '@/lib/fw'
import { CarroModel, CarroModelConfig } from './cars.model'
import { useEffect, useLayoutEffect } from 'react'

// Remove the required fields
// Object.keys(CarroModel.fields).forEach((key: any) => {
//    const field = CarroModel.fields[key]
//    field.config.require = false
// })

const CarsEditComponent = () => {
   const { setDescription } = useCrudLayout()

   const {
      getFormType,
      onFieldChange,
      getValues,
      setValue,
      getValue,
      onBeforeSave,
      onAfterSave,
      onCreateInit,
      onEditInit,
      setFieldLabel,
      setFieldVisibility,
      setFieldConfig,
   } = useCrudEdit<CarroModelConfig>()

   useLayoutEffect(() => {
      console.log(getFormType())

      setDescription('Para o cadastramento de novos carros, use esta tela.')

      setFieldLabel('name', 'Nome completo do usuário')

      setFieldVisibility('code', true)

      setFieldConfig('code', { size: 12 })
      setFieldConfig('code', { disabled: true })
      setFieldConfig('name', { size: 12 })

      setFieldConfig<'cnpj', StringConfig>('cnpj', { cnpj: false })
   }, [])

   useEffect(() => {
      onFieldChange('code', () => {
         const data = getValues()
         console.log(data)
      })

      onFieldChange('name', (value) => {
         console.log('name:' + value)
      })

      onFieldChange('email', (value) => {
         setValue('description', value)
      })

      onFieldChange('cnpj', () => {
         const value = getValue('cnpj')
         console.log('cnpj:' + value)
      })

      onBeforeSave(async () => {
         console.log('beforeSave')

         await new Promise((resolve) => {
            setTimeout(() => {
               resolve(true)
            }, 500)
         })

         return true
      })

      onAfterSave(async () => {
         console.log('afterSave')

         await new Promise((resolve) => {
            setTimeout(() => {
               resolve(true)
            }, 500)
         })

         return true
      })

      onCreateInit(() => {
         console.log('onCreateInit')
         setValue('saleDate', new Date())
      })

      onEditInit(() => {
         console.log('onEditInit')
         setValue('saleDate', new Date())
      })
   }, [])

   return null
}

export function CarsEdit() {
   return (
      <CrudEditPage model={CarroModel}>
         <CarsEditComponent />
      </CrudEditPage>
   )
}
