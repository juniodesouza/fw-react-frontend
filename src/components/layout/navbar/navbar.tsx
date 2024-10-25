import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'
import UserMenu from './user-menu'
import MobileMenu from './mobile-menu'
import { ModeToggle } from './theme-toogle'
interface INavbar {
   handleSidebar: () => void
}

function Navbar({ handleSidebar }: INavbar) {
   return (
      <header className="sticky top-0 z-30 flex h-14 items-center justify-start gap-4 border-b bg-background px-5 sm:border-0 sm:bg-muted">
         <MobileMenu handleSidebar={handleSidebar} />

         <div className="relative ml-auto md:grow-0">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
               type="search"
               placeholder="Pesquisar..."
               className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[320px]"
            />
         </div>
         <ModeToggle />
         <UserMenu />
      </header>
   )
}

export default Navbar
