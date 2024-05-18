import {
   CircleX,
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
   X,
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
import {
   Sheet,
   SheetClose,
   SheetContent,
   SheetTrigger,
} from '@/components/ui/sheet'
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
import SidebarOpened from './sidebar/sidebar-opened'
import { ScrollArea, ScrollBar } from '../ui/scroll-area'

function Navbar({ handleSidebar }: { handleSidebar: () => void }) {
   return (
      <header className="sticky top-0 z-30 flex h-14 justify-end items-center gap-4 border-b bg-background px-4 sm:border-0 sm:bg-muted sm:px-4">
         <Sheet>
            <SheetTrigger asChild>
               <div className="flex flex-1 sm:hidden">
                  <LucideMenu className="cursor-pointer" />
               </div>

               {/* <Button size="icon" variant="outline" className="sm:hidden">
                  <PanelLeft className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
               </Button> */}
            </SheetTrigger>
            <SheetContent
               side="left"
               className="w-2/3 bg-primary dark:bg-primary-foreground p-0 border-none"
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
               <ScrollArea>
                  <SidebarOpened />
                  <ScrollBar orientation="vertical" />
               </ScrollArea>
            </SheetContent>
         </Sheet>
         <div className="hidden sm:flex flex-1">
            <LucideMenu className="cursor-pointer" onClick={handleSidebar} />
         </div>
         {/* <Breadcrumb className="hidden md:flex flex-1">
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
         </Breadcrumb> */}
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
