import { FormControl } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { ControllerRenderProps } from 'react-hook-form'
import { Field } from '../../types'

interface FwInputNumber {
   id: string
   field: Field
   props: ControllerRenderProps<{ [x: string]: any }, string>
}

const FwInputNumber = ({ id, field, props }: FwInputNumber) => {
   return (
      <FormControl>
         <Input
            id={id}
            type="number"
            placeholder={field.config.placeholder}
            disabled={field.config.disabled}
            {...props}
         />
      </FormControl>
   )
}

FwInputNumber.displayName = 'FwInputNumber'

export { FwInputNumber }
