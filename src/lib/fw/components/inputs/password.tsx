import { FormControl } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { ControllerRenderProps } from 'react-hook-form'
import { Field } from '../../types'

interface FwInputPassword {
   id: string
   field: Field
   props: ControllerRenderProps<{ [x: string]: any }, string>
}

const FwInputPassword = ({ id, field, props }: FwInputPassword) => {
   return (
      <FormControl>
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
