import { Outlet } from 'react-router-dom'
import Sidebar from './sidebar'
import Navbar from './navbar'
import { useState } from 'react'

export default function Layout() {
   const [isOpen, setOpen] = useState<boolean>(false)

   const handleSidebar = () => {
      setOpen(!isOpen)
   }

   return (
      <div className={`flex min-h-screen w-full flex-col bg-muted/40`}>
         <Sidebar isOpen={isOpen} />
         <div className={`flex flex-col ${isOpen ? 'sm:pl-56' : 'sm:pl-16'}`}>
            <Navbar handleSidebar={handleSidebar} />
            <main className="grid flex-1 p-4 sm:px-4 sm:py-0 md:gap-8">
               <Outlet />
            </main>
         </div>
      </div>
   )
}
