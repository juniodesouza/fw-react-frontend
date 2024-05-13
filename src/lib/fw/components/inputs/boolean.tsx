import { FormControl } from '@/components/ui/form'
import { ControllerRenderProps } from 'react-hook-form'
import { Switch } from '@/components/ui/switch'

import { Label } from '@/components/ui/label'
import { BooleanConfig, Field } from '../../types'

interface FwInputBoolean {
   id: string
   field: Field
   props: ControllerRenderProps<{ [x: string]: any }, string>
}

const FwInputBoolean = ({ id, field, props }: FwInputBoolean) => {
   const config = field.config as BooleanConfig

   return (
      <FormControl>
         <div>
            <Switch
               id={id}
               checked={props.value}
               onCheckedChange={props.onChange}
               disabled={field.config.disabled}
               {...props}
            />{' '}
            <Label htmlFor={id}>
               {props.value ? config.labelTrue : config.labelFalse}
            </Label>
         </div>
      </FormControl>
   )
}

FwInputBoolean.displayName = 'FwInputBoolean'

export { FwInputBoolean }
