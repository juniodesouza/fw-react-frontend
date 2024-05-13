import { FormControl } from '@/components/ui/form'
import {
   Select,
   SelectContent,
   SelectItem,
   SelectTrigger,
   SelectValue,
} from '@/components/ui/select'
import { ControllerRenderProps } from 'react-hook-form'
import { Field, SelectConfig } from '../../types'

interface FwInputSelect {
   id: string
   field: Field
   props: ControllerRenderProps<{ [x: string]: any }, string>
}

const FwInputSelect = ({ id, field, props }: FwInputSelect) => {
   const config = field.config as SelectConfig

   return (
      <FormControl>
         <Select
            name={id}
            onValueChange={props.onChange}
            defaultValue={props.value}
            disabled={field.config.disabled}
         >
            <SelectTrigger className="w-[280px]">
               <SelectValue placeholder="Selecione" />
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
