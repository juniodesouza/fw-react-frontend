import {
   Car,
   ChevronDown,
   ClipboardPlus,
   FilePenLine,
   Home,
   Receipt,
} from 'lucide-react'
import { ScrollArea } from '../ui/scroll-area'
import { Link } from 'react-router-dom'

function Sidebar() {
   interface Menu {
      title: string
      icon: JSX.Element
      url?: string
      itens?: any[]
   }

   const menus: Menu[] = [
      {
         title: 'Início',
         icon: <Home size={18} />,
         url: '/app/home',
      },
      {
         title: 'Carros',
         icon: <Car size={18} />,
         url: '/app/cars',
      },
      {
         title: 'Orçamentos',
         icon: <Receipt size={18} />,
         url: '/app/cars/create',
      },
      {
         title: 'Vistorias',
         icon: <FilePenLine size={18} />,
         url: '/app/cars',
      },
      {
         title: 'Laudos',
         icon: <ClipboardPlus size={18} />,
         url: '/app/cars/create',
      },
      {
         title: 'Equipamentos',
         icon: <ClipboardPlus size={18} />,
         itens: [
            {
               title: 'Geradores',
               icon: <ClipboardPlus size={18} />,
               url: '/app/cars',
            },
            {
               title: 'Usinas',
               icon: <ClipboardPlus size={18} />,
               url: '/app/cars/create',
            },
            {
               title: 'Foltovaltaicos',
               icon: <ClipboardPlus size={18} />,
               url: '/app/cars',
            },
         ],
      },
   ]

   return (
      <aside className="fixed inset-y-0 left-0 z-10 hidden w-56 flex-col border-r bg-primary sm:flex dark:bg-primary-foreground">
         <div className="px-4 py-6 mt-2 mb-2">
            <img src="/logo.svg"></img>
         </div>
         <ScrollArea>
            <nav className="px-2 py-4">
               <ul className="space-y-4 font-medium text-primary-foreground">
                  {menus.map((menu, index) => {
                     return (
                        <li key={index}>
                           <Link
                              to={menu.url || '#'}
                              className="flex items-center p-2 rounded-md hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
                           >
                              {menu.icon}
                              <span className="flex-1 ms-3 whitespace-nowrap">
                                 {menu.title}
                              </span>
                              {menu.itens && (
                                 <span className="">
                                    <ChevronDown />
                                 </span>
                              )}
                           </Link>
                        </li>
                     )
                  })}
               </ul>
            </nav>
         </ScrollArea>
      </aside>
   )
}

export default Sidebar
