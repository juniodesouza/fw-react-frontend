import {
   HoverCard,
   HoverCardContent,
   HoverCardTrigger,
} from '@/components/ui/hover-card'
import { menus } from '@/menus'
import { ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'

function SidebarClosed() {
   return (
      <nav className="px-1 py-4">
         <ul className="text-md space-y-4 font-medium text-primary-foreground">
            {menus.map((menu, index) => {
               if (menu.unique) {
                  return (
                     <li key={index}>
                        <HoverCard openDelay={50} closeDelay={50}>
                           <HoverCardTrigger asChild>
                              <Link
                                 to={menu.url}
                                 className="group flex w-full items-center justify-center rounded-md p-2 hover:bg-gray-100 hover:text-primary dark:text-white dark:hover:bg-gray-700"
                              >
                                 {menu.icon(25)}
                              </Link>
                           </HoverCardTrigger>
                           <HoverCardContent
                              side="right"
                              className="w-auto p-2"
                           >
                              {menu.title}
                           </HoverCardContent>
                        </HoverCard>
                     </li>
                  )
               } else {
                  return (
                     <li key={index}>
                        <HoverCard openDelay={50} closeDelay={50}>
                           <HoverCardTrigger asChild>
                              <div className="group flex w-full cursor-pointer items-center justify-center rounded-md p-2 hover:bg-gray-100 hover:text-primary dark:text-white dark:hover:bg-gray-700">
                                 {menu.icon(25)}
                              </div>
                           </HoverCardTrigger>
                           <HoverCardContent
                              side="right"
                              className="w-auto p-1"
                           >
                              <h3 className="p-2">{menu.title}</h3>
                              <ul className="py-0 text-sm font-normal">
                                 {menu.itens?.map((item, idx) => {
                                    return (
                                       <li key={idx}>
                                          <Link
                                             to={item.url}
                                             className="group flex items-center rounded-md px-2 py-1.5 pr-5 hover:bg-gray-100 hover:text-primary dark:text-white dark:hover:bg-gray-700"
                                          >
                                             <ChevronRight size={16} />
                                             <span className="flex-1 whitespace-nowrap">
                                                {item.title}
                                             </span>
                                          </Link>
                                       </li>
                                    )
                                 })}
                              </ul>
                           </HoverCardContent>
                        </HoverCard>
                     </li>
                  )
               }
            })}
         </ul>
      </nav>
   )
}

export default SidebarClosed
