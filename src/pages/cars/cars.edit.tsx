import { CrudEdit } from '@/lib/fw'
import CarroModel from './cars.model'

export function CarsEdit() {
   const description = 'Para o cadastramento de novos carros, use esta tela.'

   return <CrudEdit model={CarroModel} description={description} />
}
