import { FWCrudList } from '@/lib/fw/crud.lists'
import CarroModel from './cars.model'

export function CarsList() {
   const description =
      'Esta tela contém informações detalhadas sobre os carros da empresa'

   return <FWCrudList model={CarroModel} description={description} />
}
