import SidebarOpened from './sidebar-opened'
import SidebarClosed from './sidebar-closed'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'

function Sidebar({ isOpen }: { isOpen: boolean }) {
   return (
      <aside
         className={` ${isOpen ? 'w-56' : 'w-16'} z-100 fixed inset-y-0 left-0 hidden flex-col border-r bg-primary dark:bg-primary-foreground sm:flex `}
      >
         <div className="mb-2 mt-2 px-4 py-6">
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
