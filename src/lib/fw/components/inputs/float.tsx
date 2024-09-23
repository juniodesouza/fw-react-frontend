import { FormControl } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { ControllerRenderProps } from 'react-hook-form'
import { FieldFloat } from '../../types'

interface FwInputFloat {
   id: string
   field: FieldFloat
   props: ControllerRenderProps<{ [x: string]: any }, string>
}

const FwInputFloat = ({ id, field, props }: FwInputFloat) => {
   return (
      <FormControl className="w-full">
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

FwInputFloat.displayName = 'FwInputFloat'

export { FwInputFloat }
