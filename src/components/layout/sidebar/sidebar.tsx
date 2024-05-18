import SidebarOpened from './sidebar-opened'
import SidebarClosed from './sidebar-closed'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'

function Sidebar({ isOpen }: { isOpen: boolean }) {
   return (
      <aside
         className={` ${isOpen ? 'w-56' : 'w-16'} fixed inset-y-0 left-0 z-100 hidden sm:flex flex-col border-r bg-primary dark:bg-primary-foreground `}
      >
         <div className="px-4 py-6 mt-2 mb-2">
            <img src="/logo.svg"></img>
         </div>
         <ScrollArea>
            {isOpen ? <SidebarOpened /> : <SidebarClosed />}
            <ScrollBar orientation="vertical" />
         </ScrollArea>
      </aside>
   )
}

export default Sidebar
