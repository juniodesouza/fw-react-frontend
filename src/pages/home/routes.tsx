import { Navigate } from 'react-router-dom'
import { Home } from './home'

const routes = [
   {
      path: '',
      element: <Navigate to="home" replace={true} />,
   },
   { path: 'home', element: <Home /> },
]

export default routes
