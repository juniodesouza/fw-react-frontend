import {
   File,
   Home,
   LineChart,
   ListFilter,
   LucideMenu,
   MoreHorizontal,
   Package,
   Package2,
   PanelLeft,
   PlusCircle,
   Search,
   Settings,
   ShoppingCart,
   Users2,
} from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import {
   Breadcrumb,
   BreadcrumbItem,
   BreadcrumbLink,
   BreadcrumbList,
   BreadcrumbPage,
   BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { Button } from '@/components/ui/button'
import {
   Card,
   CardContent,
   CardDescription,
   CardFooter,
   CardHeader,
   CardTitle,
} from '@/components/ui/card'
import {
   DropdownMenu,
   DropdownMenuCheckboxItem,
   DropdownMenuContent,
   DropdownMenuItem,
   DropdownMenuLabel,
   DropdownMenuSeparator,
   DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import {
   Table,
   TableBody,
   TableCell,
   TableHead,
   TableHeader,
   TableRow,
} from '@/components/ui/table'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
   Tooltip,
   TooltipContent,
   TooltipProvider,
   TooltipTrigger,
} from '@/components/ui/tooltip'
import { Outlet } from 'react-router-dom'
import { ModeToggle } from './theme-toogle'

function Navbar({ handleSidebar }: { handleSidebar: () => void }) {
   return (
      <header className="sticky top-0 z-30 flex h-14 justify-end items-center gap-4 border-b bg-background px-4 sm:border-0 sm:bg-muted sm:px-4">
         <Sheet>
            <SheetTrigger asChild>
               <Button size="icon" variant="outline" className="sm:hidden">
                  <PanelLeft className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
               </Button>
            </SheetTrigger>
            <SheetContent side="left" className="sm:max-w-xs">
               <nav className="grid gap-6 text-lg font-medium">
                  <a
                     href="#"
                     className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
                  >
                     <Package2 className="h-5 w-5 transition-all group-hover:scale-110" />
                     <span className="sr-only">Acme Inc</span>
                  </a>
                  <a
                     href="#"
                     className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                  >
                     <Home className="h-5 w-5" />
                     Dashboard
                  </a>
                  <a
                     href="#"
                     className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                  >
                     <ShoppingCart className="h-5 w-5" />
                     Orders
                  </a>
                  <a
                     href="#"
                     className="flex items-center gap-4 px-2.5 text-foreground"
                  >
                     <Package className="h-5 w-5" />
                     Products
                  </a>
                  <a
                     href="#"
                     className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                  >
                     <Users2 className="h-5 w-5" />
                     Customers
                  </a>
                  <a
                     href="#"
                     className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                  >
                     <LineChart className="h-5 w-5" />
                     Settings
                  </a>
               </nav>
            </SheetContent>
         </Sheet>
         <LucideMenu className="cursor-pointer" onClick={handleSidebar} />
         <Breadcrumb className="hidden md:flex flex-1">
            <BreadcrumbList>
               <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                     <a href="#">Dashboard</a>
                  </BreadcrumbLink>
               </BreadcrumbItem>
               <BreadcrumbSeparator />
               <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                     <a href="#">Products</a>
                  </BreadcrumbLink>
               </BreadcrumbItem>
               <BreadcrumbSeparator />
               <BreadcrumbItem>
                  <BreadcrumbPage>Cadastrar</BreadcrumbPage>
               </BreadcrumbItem>
            </BreadcrumbList>
         </Breadcrumb>
         {/* <div className="relative ml-auto flex-1 md:grow-0">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
               type="search"
               placeholder="Search..."
               className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[320px]"
            />
         </div> */}
         <ModeToggle />
         <DropdownMenu>
            <DropdownMenuTrigger asChild>
               <Button
                  variant="outline"
                  size="icon"
                  className="overflow-hidden rounded-full"
               >
                  <img
                     src="/placeholder-user.jpg"
                     width={36}
                     height={36}
                     alt="Avatar"
                     className="overflow-hidden rounded-full"
                  />
               </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
               <DropdownMenuLabel>My Account</DropdownMenuLabel>
               <DropdownMenuSeparator />
               <DropdownMenuItem>Settings</DropdownMenuItem>
               <DropdownMenuItem>Support</DropdownMenuItem>
               <DropdownMenuSeparator />
               <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
         </DropdownMenu>
      </header>
   )
}

export default Navbar
