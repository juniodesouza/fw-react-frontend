import { FormControl } from '@/components/ui/form'
import { ControllerRenderProps } from 'react-hook-form'
import { Switch } from '@/components/ui/switch'

import { Label } from '@/components/ui/label'
import { BooleanConfig, FieldBoolean } from '../../types'

interface InputBooleanProps {
   id: string
   field: FieldBoolean
   props: ControllerRenderProps<{ [x: string]: any }, string>
}

const InputBoolean = ({ id, field, props }: InputBooleanProps) => {
   const config = field.config as BooleanConfig

   return (
      <FormControl className="w-full">
         <div className="flex items-center gap-1 pt-2">
            <Switch
               id={id}
               checked={props.value}
               onCheckedChange={props.onChange}
               disabled={!!field.config.disabled}
               {...props}
            />{' '}
            {config.labelTrue && config.labelFalse && (
               <Label htmlFor={id} className="cursor-pointer">
                  {props.value ? config.labelTrue : config.labelFalse}
               </Label>
            )}
         </div>
      </FormControl>
   )
}

InputBoolean.displayName = 'InputBoolean'

export { InputBoolean }
