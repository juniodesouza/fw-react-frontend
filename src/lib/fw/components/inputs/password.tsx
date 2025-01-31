import { FormControl } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { ControllerRenderProps } from 'react-hook-form'
import { FieldPassword, PasswordConfig } from '../../types'
import { Eye, EyeOff } from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'

interface InputPasswordProps {
   id: string
   field: FieldPassword
   props: ControllerRenderProps<{ [x: string]: any }, string>
}

const InputPassword = ({ id, field, props }: InputPasswordProps) => {
   const config = field.config as PasswordConfig

   const [showPassword, setShowPassword] = useState(false)

   return (
      <FormControl className="w-full">
         <div className="relative">
            <Input
               id={id}
               type={showPassword ? 'text' : 'password'}
               placeholder={config.placeholder}
               disabled={config.disabled}
               {...props}
            />
            <Button
               type="button"
               size="icon"
               variant="ghost"
               className="absolute right-3 top-2.5 h-4 w-4 text-muted-foreground"
               onClick={() => setShowPassword((prev) => !prev)}
            >
               {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
            </Button>
         </div>
      </FormControl>
   )
}
InputPassword.displayName = 'InputPassword'

export { InputPassword }
