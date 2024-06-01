import { CarsEdit } from './cars.edit'
import { CarsList } from './cars.lists'

const routes = [
   { path: 'cars', element: <CarsList /> },
   { path: 'cars/create', element: <CarsEdit /> },
   { path: 'cars/:id/edit', element: <CarsEdit /> },
]

export default routes
