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
      <nav className="px-1 py-4">
         <ul className="space-y-3 text-lg font-medium text-primary-foreground sm:text-base">
            {menus.map((menu, index) => {
               if (menu.unique) {
                  return (
                     <li key={index}>
                        <Link
                           onClick={handleMenuClick}
                           to={menu.url}
                           className="group flex items-center rounded-md p-2 dark:text-white dark:hover:bg-gray-700 sm:hover:bg-gray-100 sm:hover:text-primary"
                        >
                           {menu.icon(iconSize)}
                           <span className="ms-3 flex-1 whitespace-nowrap">
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
                              <div className="group flex cursor-pointer items-center rounded-md p-2 dark:text-white dark:hover:bg-gray-700 sm:hover:bg-gray-100 sm:hover:text-primary">
                                 {menu.icon(iconSize)}
                                 <span className="ms-3 flex-1 whitespace-nowrap">
                                    {menu.title}
                                 </span>
                                 <span className="">
                                    <ChevronDown />
                                 </span>
                              </div>
                           </CollapsibleTrigger>
                           <CollapsibleContent>
                              <ul className="bg-muted/10 py-2 text-sm font-normal dark:bg-muted-foreground/10">
                                 {menu.itens?.map((item, idx) => {
                                    return (
                                       <li key={idx}>
                                          <Link
                                             onClick={handleMenuClick}
                                             to={item.url}
                                             className="group flex items-center rounded-md p-2 dark:text-white dark:hover:bg-gray-700 sm:hover:bg-gray-100 sm:hover:text-primary"
                                          >
                                             <ChevronRight size={16} />
                                             <span className="ms-1 flex-1 whitespace-nowrap">
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
