import {
   Sheet,
   SheetClose,
   SheetContent,
   SheetTrigger,
} from '@/components/ui/sheet'
import { LucideMenu, X } from 'lucide-react'
import SidebarOpened from '../sidebar/sidebar-opened'
import { ScrollBar, ScrollArea } from '@/components/ui/scroll-area'
import { useState } from 'react'

interface IMobileMenu {
   handleSidebar: () => void
}

function MobileMenu({ handleSidebar }: IMobileMenu) {
   const [openSheet, setOpenSheet] = useState<boolean>(false)

   const closeSheetMenu = () => {
      setOpenSheet(false)
   }

   return (
      <>
         <div className="hidden sm:flex">
            <LucideMenu className="cursor-pointer" onClick={handleSidebar} />
         </div>

         <Sheet open={openSheet} onOpenChange={setOpenSheet}>
            <SheetTrigger asChild>
               <div className="flex flex-1 sm:hidden">
                  <LucideMenu className="cursor-pointer" />
               </div>
            </SheetTrigger>
            <SheetContent
               side="left"
               className="w-3/4 bg-primary dark:bg-primary-foreground p-0 border-none outline-none flex flex-col"
            >
               <SheetClose asChild>
                  <X
                     className="cursor-pointer text-primary-foreground absolute right-3 top-3"
                     size={30}
                  />
               </SheetClose>
               <div className="px-4 py-6 mt-2 mb-2">
                  <img src="/logo.svg"></img>
               </div>
               <ScrollArea className="flex-1">
                  <SidebarOpened closeSheetMenu={closeSheetMenu} />
                  <ScrollBar orientation="vertical" />
               </ScrollArea>
            </SheetContent>
         </Sheet>
      </>
   )
}

export default MobileMenu
