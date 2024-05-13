import { CrudEdit } from '@/lib/fw/crud.edit'
import CarroModel from './cars.model'

export function CarsEdit() {
   return <CrudEdit model={CarroModel} />
}
