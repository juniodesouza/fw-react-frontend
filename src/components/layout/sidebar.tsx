import {
   Car,
   ChevronDown,
   ChevronRight,
   ClipboardPlus,
   FilePenLine,
   Home,
   Receipt,
   VeganIcon,
} from 'lucide-react'
import { ScrollArea, ScrollBar } from '../ui/scroll-area'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import {
   Collapsible,
   CollapsibleContent,
   CollapsibleTrigger,
} from '../ui/collapsible'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '../ui/hover-card'

function Sidebar({ isOpen }: { isOpen: boolean }) {
   interface IMenu {
      title: string
      icon?: JSX.Element
      url?: string
      itens?: any[]
   }

   interface ICollapsibleState {
      [key: number]: boolean
   }

   const menus: IMenu[] = [
      {
         title: 'Início',
         icon: <Home size={isOpen ? 20 : 25} />,
         url: '/app/home',
      },
      {
         title: 'Carros',
         icon: <Car size={isOpen ? 20 : 25} />,
         url: '/app/cars',
      },
      {
         title: 'Orçamentos',
         icon: <Receipt size={isOpen ? 20 : 25} />,
         url: '/app/cars/create',
      },
      {
         title: 'Vistorias',
         icon: <FilePenLine size={isOpen ? 20 : 25} />,
         url: '/app/cars',
      },
      {
         title: 'Laudos',
         icon: <ClipboardPlus size={isOpen ? 20 : 25} />,
         url: '/app/cars/create',
      },
      {
         title: 'Equipamentos',
         icon: <VeganIcon size={isOpen ? 20 : 25} />,
         itens: [
            {
               title: 'Geradores',
               url: '/app/cars',
            },
            {
               title: 'Usinas',
               url: '/app/cars/create',
            },
            {
               title: 'Foltovaltaicos',
               url: '/app/cars',
            },
         ],
      },
      {
         title: 'Produtos',
         icon: <FilePenLine size={isOpen ? 20 : 25} />,
         itens: [
            {
               title: 'Geradores',
               url: '/app/cars',
            },
            {
               title: 'Usinas',
               url: '/app/cars/create',
            },
            {
               title: 'Foltovaltaicos',
               url: '/app/cars',
            },
         ],
      },
   ]

   const initialState: ICollapsibleState = {}
   for (let index = 0; index < menus.length; index++) {
      const menu = menus[index]
      if (menu.itens) {
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

   return (
      <aside
         className={` ${isOpen ? 'w-56' : 'w-16'} fixed inset-y-0 left-0 z-100 hidden sm:flex flex-col border-r bg-primary dark:bg-primary-foreground `}
      >
         <div className="px-4 py-6 mt-2 mb-2">
            <img src="/logo.svg"></img>
         </div>
         <ScrollArea>
            {isOpen ? (
               <nav className="py-4 px-1">
                  <ul className="space-y-3 font-medium text-primary-foreground text-md">
                     {menus.map((menu, index) => {
                        if (menu.url && !menu.itens) {
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
                                 </Link>
                              </li>
                           )
                        } else {
                           return (
                              <li key={index}>
                                 <Collapsible
                                    open={collapsibleState[index]}
                                    onOpenChange={() =>
                                       handleCollapsibleToggle(index)
                                    }
                                 >
                                    <CollapsibleTrigger asChild>
                                       <div className="flex cursor-pointer items-center p-2 rounded-md hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                                          {menu.icon}
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
                                                      to={item.url}
                                                      className="flex p-2 items-center rounded-md hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
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
            ) : (
               <nav className="py-4 px-1">
                  <ul className="space-y-4 font-medium text-primary-foreground text-md">
                     {menus.map((menu, index) => {
                        if (menu.url && !menu.itens) {
                           return (
                              <li key={index}>
                                 <HoverCard openDelay={50} closeDelay={50}>
                                    <HoverCardTrigger asChild>
                                       <Link
                                          to={menu.url || '#'}
                                          className="w-full justify-center flex items-center p-2 rounded-md hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
                                       >
                                          {menu.icon}
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
                                          {menu.icon}
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
            )}

            <ScrollBar orientation="vertical" />
         </ScrollArea>
      </aside>
   )
}

export default Sidebar
