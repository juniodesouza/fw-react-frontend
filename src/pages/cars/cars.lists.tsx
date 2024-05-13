import { CrudList } from '@/lib/fw/crud.lists'
import CarroModel from './cars.model'

export function CarsList() {
   return <CrudList model={CarroModel} />
}
