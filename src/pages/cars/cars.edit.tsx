import { FWCrudEdit } from '@/lib/fw/crud.edit'
import CarroModel from './cars.model'

export function CarsEdit() {
   const description = 'Para o cadastramento de novos carros, use esta tela.'

   return <FWCrudEdit model={CarroModel} description={description} />
}
