import { FormControl } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { ControllerRenderProps } from 'react-hook-form'
import { FieldFloat, FloatConfig } from '../../types'

interface FwInputFloat {
   id: string
   field: FieldFloat
   props: ControllerRenderProps<{ [x: string]: any }, string>
}

const FwInputFloat = ({ id, field, props }: FwInputFloat) => {
   const config = field.config as FloatConfig

   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const regex = new RegExp(`^\\d*,?\\d{0,${config.decimalPlaces || 2}}$`)

      const newValue = e.target.value
      if (regex.test(newValue)) {
         props.onChange && props.onChange(e)
      }
   }

   return (
      <FormControl className="w-full">
         <Input
            id={id}
            type="text"
            inputMode="decimal"
            placeholder={config.placeholder}
            disabled={config.disabled}
            {...props}
            onChange={handleChange}
         />
      </FormControl>
   )
}

FwInputFloat.displayName = 'FwInputFloat'

export { FwInputFloat }
