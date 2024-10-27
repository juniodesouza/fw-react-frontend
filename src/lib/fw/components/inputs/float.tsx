import { ControllerRenderProps } from 'react-hook-form'
import { FieldFloat, FloatConfig } from '../../types'
import { InputNumber } from 'primereact/inputnumber'

interface FwInputFloat {
   id: string
   field: FieldFloat
   invalid: boolean
   props: ControllerRenderProps<{ [x: string]: any }, string>
}

const FwInputFloat = ({ id, field, invalid, props }: FwInputFloat) => {
   const config = field.config as FloatConfig

   return (
      <InputNumber
         invalid={invalid}
         inputId={id}
         inputClassName="w-full"
         useGrouping={true}
         prefix={config.currency ? 'R$ ' : ''}
         placeholder={config.placeholder}
         disabled={config.disabled}
         {...props}
      />
   )
}

FwInputFloat.displayName = 'FwInputFloat'

export { FwInputFloat }
