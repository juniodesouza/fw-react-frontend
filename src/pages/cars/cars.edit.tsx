import { FWCrudEdit } from '@/lib/fw/crud.edit'
import CarroModel from './cars.model'

export function CarsEdit() {
   return <FWCrudEdit model={CarroModel} />
}
