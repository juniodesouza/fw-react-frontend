import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Login } from './pages/auth/login'
import { Home } from './pages/home/home'
import { CarsList } from './pages/cars/cars.lists'
import { CarsEdit } from './pages/cars/cars.edit'

function AppRouter() {
   const routes = [
      { path: '/', element: <Login /> },

      { path: '/home', element: <Home /> },

      { path: '/cars', element: <CarsList /> },
      { path: '/cars/create', element: <CarsEdit /> },
      { path: '/cars/:id/edit', element: <CarsEdit /> },
   ]

   return <RouterProvider router={createBrowserRouter(routes)} />
}

export default AppRouter
