import { ControllerRenderProps } from 'react-hook-form'
import { BooleanConfig, FieldBoolean } from '../../types'
import { InputSwitch } from 'primereact/inputswitch'

interface FwInputBoolean {
   id: string
   field: FieldBoolean
   invalid: boolean
   props: ControllerRenderProps<{ [x: string]: any }, string>
}

const FwInputBoolean = ({ id, field, invalid, props }: FwInputBoolean) => {
   const config = field.config as BooleanConfig

   return (
      <div className="flex items-center gap-1 pt-2">
         <InputSwitch
            invalid={invalid}
            inputId={id}
            checked={props.value}
            disabled={!!config.disabled}
            {...props}
         />{' '}
         {config.labelTrue && config.labelFalse && (
            <label htmlFor={id} className="cursor-pointer">
               {props.value ? config.labelTrue : config.labelFalse}
            </label>
         )}
      </div>
   )
}

FwInputBoolean.displayName = 'FwInputBoolean'

export { FwInputBoolean }
