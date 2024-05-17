import { Outlet } from 'react-router-dom'
import Sidebar from './sidebar'
import Navbar from './navbar'

export default function Layout() {
   return (
      <div className="flex min-h-screen w-full flex-col bg-muted/40">
         <Sidebar />
         <div className="flex flex-col sm:pl-56">
            <Navbar />
            <main className="grid flex-1 p-4 sm:px-6 sm:py-0 md:gap-8">
               <Outlet />
            </main>
         </div>
      </div>
   )
}
