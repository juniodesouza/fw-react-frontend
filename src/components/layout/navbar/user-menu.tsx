import { Button } from '@/components/ui/button'
import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuItem,
   DropdownMenuLabel,
   DropdownMenuSeparator,
   DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

function UserMenu() {
   return (
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
   )
}

export default UserMenu
