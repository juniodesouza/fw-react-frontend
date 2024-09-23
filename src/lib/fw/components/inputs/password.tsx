import { FormControl } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { ControllerRenderProps } from 'react-hook-form'
import { FieldPassword } from '../../types'

interface FwInputPassword {
   id: string
   field: FieldPassword
   props: ControllerRenderProps<{ [x: string]: any }, string>
}

const FwInputPassword = ({ id, field, props }: FwInputPassword) => {
   return (
      <FormControl className="w-full">
         <Input
            id={id}
            type="password"
            placeholder={field.config.placeholder}
            disabled={field.config.disabled}
            {...props}
         />
      </FormControl>
   )
}
FwInputPassword.displayName = 'FwInputPassword'

export { FwInputPassword }
