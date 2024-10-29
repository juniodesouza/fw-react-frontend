import { FormControl } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { ControllerRenderProps } from 'react-hook-form'
import { FieldNumber, NumberConfig } from '../../types'

interface FwInputNumber {
   id: string
   field: FieldNumber
   props: ControllerRenderProps<{ [x: string]: any }, string>
}

const FwInputNumber = ({ id, field, props }: FwInputNumber) => {
   const config = field.config as NumberConfig

   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value
      if (/^\d*$/.test(newValue)) {
         props.onChange && props.onChange(newValue)
      }
   }

   return (
      <FormControl className="w-full">
         <Input
            id={id}
            type="text"
            inputMode="numeric"
            placeholder={config.placeholder}
            disabled={config.disabled}
            {...props}
            onChange={handleChange}
         />
      </FormControl>
   )
}

FwInputNumber.displayName = 'FwInputNumber'

export { FwInputNumber }
