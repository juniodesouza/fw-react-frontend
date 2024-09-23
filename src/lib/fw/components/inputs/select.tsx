import { FormControl } from '@/components/ui/form'
import {
   Select,
   SelectContent,
   SelectItem,
   SelectTrigger,
   SelectValue,
} from '@/components/ui/select'
import { ControllerRenderProps } from 'react-hook-form'
import { FieldSelect, SelectConfig } from '../../types'

interface FwInputSelect {
   id: string
   field: FieldSelect
   props: ControllerRenderProps<{ [x: string]: any }, string>
}

const FwInputSelect = ({ id, field, props }: FwInputSelect) => {
   const config = field.config as SelectConfig

   return (
      <FormControl className="w-full">
         <Select
            name={id}
            onValueChange={props.onChange}
            defaultValue={props.value}
            disabled={field.config.disabled}
         >
            <SelectTrigger>
               <SelectValue placeholder={config.placeholder || 'Selecione'} />
            </SelectTrigger>
            <SelectContent>
               {config.itens.map(function (item, idx) {
                  return (
                     <SelectItem value={item.value} key={idx}>
                        {item.label}
                     </SelectItem>
                  )
               })}
            </SelectContent>
         </Select>
      </FormControl>
   )
}

FwInputSelect.displayName = 'FwInputSelect'

export { FwInputSelect }
