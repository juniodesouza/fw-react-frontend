import * as React from 'react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

export interface InputPasswordProps
   extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {}

const InputPassword = React.forwardRef<HTMLInputElement, InputPasswordProps>(
   ({ className, ...props }, ref) => {
      const [showPassword, setShowPassword] = React.useState(false)

      return (
         <div className="relative rounded-md">
            <input
               type={showPassword ? 'text' : 'password'}
               className={cn(
                  'flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
                  className
               )}
               ref={ref}
               {...props}
            />
            {!props.disabled && (
               <Button
                  type="button"
                  size="icon"
                  variant="ghost"
                  className="absolute right-1 top-1/2 h-6 w-6 -translate-y-1/2 rounded-md text-muted-foreground"
                  onClick={() => setShowPassword((prev) => !prev)}
               >
                  {/* {showPassword ? (
                     <IconEye size={18} />
                  ) : (
                     <IconEyeOff size={18} />
                  )} */}
               </Button>
            )}
         </div>
      )
   }
)
InputPassword.displayName = 'InputPassword'

export { InputPassword }