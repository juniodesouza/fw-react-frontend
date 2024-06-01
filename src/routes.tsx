import {
   createBrowserRouter,
   Navigate,
   RouteObject,
   RouterProvider,
} from 'react-router-dom'
import { Login } from './pages/auth/login'
import Layout from './components/layout/layout'

type IModule<T> = {
   [filename: string]: {
      default: T
   }
}

function AppRouter() {
   const routesModules: IModule<RouteObject[]> = import.meta.glob(
      '@/pages/**/routes.{ts,tsx}',
      {
         eager: true,
      }
   )

   const routesApp = Object.values(routesModules).reduce(
      (acc, module) => [...acc, ...module.default],
      [] as RouteObject[]
   )

   const routes: RouteObject[] = [
      { path: '/', element: <Navigate to="login" replace={true} /> },
      { path: '/login', element: <Login /> },
      {
         path: '/app',
         element: <Layout />,
         children: routesApp,
      },
   ]

   return <RouterProvider router={createBrowserRouter(routes)} />
}

export default AppRouter
