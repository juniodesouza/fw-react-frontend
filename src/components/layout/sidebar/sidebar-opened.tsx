import {
   CollapsibleContent,
   CollapsibleTrigger,
} from '@/components/ui/collapsible'
import { menus } from '@/menus'
import { Collapsible } from '@radix-ui/react-collapsible'
import { ChevronDown, ChevronRight } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

interface ISidebarOpened {
   closeSheetMenu?: () => void
}

function SidebarOpened({ closeSheetMenu }: ISidebarOpened) {
   const iconSize = 20

   interface ICollapsibleState {
      [key: number]: boolean
   }

   const initialState: ICollapsibleState = {}
   for (let index = 0; index < menus.length; index++) {
      const menu = menus[index]
      if (!menu.unique) {
         initialState[index] = false
      }
   }

   const [collapsibleState, setCollapsibleState] =
      useState<ICollapsibleState>(initialState)

   const handleCollapsibleToggle = (idx: number) => {
      setCollapsibleState((prevState) => ({
         ...prevState,
         [idx]: !prevState[idx],
      }))
   }

   const handleMenuClick = () => {
      if (closeSheetMenu) {
         closeSheetMenu()
      }
   }

   return (
      <nav className="py-4 px-1">
         <ul className="space-y-3 font-medium text-primary-foreground text-lg sm:text-base">
            {menus.map((menu, index) => {
               if (menu.unique) {
                  return (
                     <li key={index}>
                        <Link
                           onClick={handleMenuClick}
                           to={menu.url}
                           className="flex items-center p-2 rounded-md sm:hover:text-primary sm:hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
                        >
                           {menu.icon(iconSize)}
                           <span className="flex-1 ms-3 whitespace-nowrap">
                              {menu.title}
                           </span>
                        </Link>
                     </li>
                  )
               } else {
                  return (
                     <li key={index}>
                        <Collapsible
                           open={collapsibleState[index]}
                           onOpenChange={() => handleCollapsibleToggle(index)}
                        >
                           <CollapsibleTrigger asChild>
                              <div className="flex cursor-pointer items-center p-2 rounded-md sm:hover:text-primary sm:hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                                 {menu.icon(iconSize)}
                                 <span className="flex-1 ms-3 whitespace-nowrap">
                                    {menu.title}
                                 </span>
                                 <span className="">
                                    <ChevronDown />
                                 </span>
                              </div>
                           </CollapsibleTrigger>
                           <CollapsibleContent>
                              <ul className="font-normal text-sm bg-muted/10 dark:bg-muted-foreground/10 py-2">
                                 {menu.itens?.map((item, idx) => {
                                    return (
                                       <li key={idx}>
                                          <Link
                                             onClick={handleMenuClick}
                                             to={item.url}
                                             className="flex p-2 items-center rounded-md sm:hover:text-primary sm:hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
                                          >
                                             <ChevronRight size={16} />
                                             <span className="flex-1 ms-1 whitespace-nowrap">
                                                {item.title}
                                             </span>
                                          </Link>
                                       </li>
                                    )
                                 })}
                              </ul>
                           </CollapsibleContent>
                        </Collapsible>
                     </li>
                  )
               }
            })}
         </ul>
      </nav>
   )
}

export default SidebarOpened
