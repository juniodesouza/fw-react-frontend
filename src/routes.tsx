import {
   createBrowserRouter,
   Navigate,
   RouteObject,
   RouterProvider,
} from 'react-router-dom'
import { Login } from './pages/auth/login'
import { Home } from './pages/home/home'
import { CarsList } from './pages/cars/cars.lists'
import { CarsEdit } from './pages/cars/cars.edit'
import Layout from './components/layout/layout'

function AppRouter() {
   const routes: RouteObject[] = [
      { path: '/', element: <Navigate to="login" replace={true} /> },
      { path: '/login', element: <Login /> },
      {
         path: '/app',
         element: <Layout />,
         children: [
            {
               path: '',
               element: <Navigate to="home" replace={true} />,
            },
            { path: 'home', element: <Home /> },
            { path: 'cars', element: <CarsList /> },
            { path: 'cars/create', element: <CarsEdit /> },
            { path: 'cars/:id/edit', element: <CarsEdit /> },
         ],
      },
   ]

   return <RouterProvider router={createBrowserRouter(routes)} />
}

export default AppRouter