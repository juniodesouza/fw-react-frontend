import { FormControl } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { ControllerRenderProps } from 'react-hook-form'
import { FieldTime } from '../../types'
import InputMask from '@mona-health/react-input-mask'
import { Clock } from 'lucide-react'

interface FwInputTime {
   id: string
   field: FieldTime
   props: ControllerRenderProps<{ [x: string]: any }, string>
}

const FwInputTime = ({ id, field, props }: FwInputTime) => {
   return (
      <FormControl className="w-full">
         <div className="relative">
            <InputMask
               mask={'99:99'}
               value={props.value}
               onChange={props.onChange}
               onBlur={props.onBlur}
            >
               <Input
                  id={id}
                  type="text"
                  className="pr-9"
                  placeholder={field.config.placeholder}
                  disabled={field.config.disabled}
                  {...props}
               />
            </InputMask>
            <Clock className="absolute right-3 top-2.5 h-4 w-4 text-muted-foreground" />
         </div>
      </FormControl>
   )
}

FwInputTime.displayName = 'FwInputTime'

export { FwInputTime }
