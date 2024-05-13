import { FormControl } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { ControllerRenderProps } from 'react-hook-form'
import { Field } from '../../types'

interface FwInputString {
   id: string
   field: Field
   props: ControllerRenderProps<{ [x: string]: any }, string>
}

const FwInputString = ({ id, field, props }: FwInputString) => {
   return (
      <FormControl>
         <Input
            id={id}
            type="text"
            placeholder={field.config.placeholder}
            disabled={field.config.disabled}
            {...props}
         />
      </FormControl>
   )
}

FwInputString.displayName = 'FwInputString'

export { FwInputString }
