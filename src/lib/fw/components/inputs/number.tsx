import { ControllerRenderProps } from 'react-hook-form'
import { FieldNumber, NumberConfig } from '../../types'
import { InputNumber } from 'primereact/inputnumber'

interface FwInputNumber {
   id: string
   field: FieldNumber
   invalid: boolean
   props: ControllerRenderProps<{ [x: string]: any }, string>
}

const FwInputNumber = ({ id, field, invalid, props }: FwInputNumber) => {
   const config = field.config as NumberConfig

   return (
      <InputNumber
         invalid={invalid}
         inputId={id}
         inputClassName="w-full"
         useGrouping={false}
         placeholder={config.placeholder}
         disabled={config.disabled}
         {...props}
      />
   )
}

FwInputNumber.displayName = 'FwInputNumber'

export { FwInputNumber }
