import { Outlet } from 'react-router-dom'
import { useState } from 'react'
import Sidebar from './sidebar/sidebar'
import Navbar from './navbar/navbar'

export default function Layout() {
   const [isOpen, setOpen] = useState<boolean>(true)

   const handleSidebar = () => {
      setOpen(!isOpen)
   }

   return (
      <div className={`flex min-h-screen w-full flex-col bg-muted/40`}>
         <Sidebar isOpen={isOpen} />
         <div className={`flex flex-col ${isOpen ? 'sm:pl-56' : 'sm:pl-16'}`}>
            <Navbar handleSidebar={handleSidebar} />
            <main className="px-5 py-2">
               <Outlet />
            </main>
         </div>
      </div>
   )
}
