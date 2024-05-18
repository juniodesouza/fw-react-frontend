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
      <nav className="py-4 px-1">
         <ul className="space-y-4 font-medium text-primary-foreground text-md">
            {menus.map((menu, index) => {
               if (menu.unique) {
                  return (
                     <li key={index}>
                        <HoverCard openDelay={50} closeDelay={50}>
                           <HoverCardTrigger asChild>
                              <Link
                                 to={menu.url}
                                 className="w-full justify-center flex items-center p-2 rounded-md hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
                              >
                                 {menu.icon(25)}
                              </Link>
                           </HoverCardTrigger>
                           <HoverCardContent
                              side="right"
                              className="p-2 w-auto"
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
                              <div className="w-full justify-center flex items-center cursor-pointer p-2 rounded-md hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                                 {menu.icon(25)}
                              </div>
                           </HoverCardTrigger>
                           <HoverCardContent
                              side="right"
                              className="p-1 w-auto"
                           >
                              <h3 className="p-2">{menu.title}</h3>
                              <ul className="font-normal text-sm py-0">
                                 {menu.itens?.map((item, idx) => {
                                    return (
                                       <li key={idx}>
                                          <Link
                                             to={item.url}
                                             className="flex py-1.5 px-2 pr-5 items-center rounded-md hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
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
