import { FormControl } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { ControllerRenderProps } from 'react-hook-form'
import { Field } from '../../types'

interface FwInputTime {
   id: string
   field: Field
   props: ControllerRenderProps<{ [x: string]: any }, string>
}

const FwInputTime = ({ id, field, props }: FwInputTime) => {
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

FwInputTime.displayName = 'FwInputTime'

export { FwInputTime }
