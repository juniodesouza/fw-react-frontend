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
               className="flex w-3/4 flex-col border-none bg-primary p-0 outline-none dark:bg-primary-foreground"
            >
               <SheetClose asChild>
                  <X
                     className="absolute right-3 top-3 cursor-pointer text-primary-foreground"
                     size={30}
                  />
               </SheetClose>
               <div className="mb-2 mt-2 px-4 py-6">
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
