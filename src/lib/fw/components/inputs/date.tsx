import { FormControl } from '@/components/ui/form'
import {
   Popover,
   PopoverContent,
   PopoverTrigger,
} from '@/components/ui/popover'
import { Button } from '@/components/ui/button'
import { CalendarIcon } from '@radix-ui/react-icons'
import { Calendar } from '@/components/ui/calendar'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { ControllerRenderProps } from 'react-hook-form'
import { FieldDate } from '../../types'
import { cn } from '@/lib/utils'

interface FwInputDate {
   id: string
   field: FieldDate
   props: ControllerRenderProps<{ [x: string]: any }, string>
}

const FwInputDate = ({ id, field, props }: FwInputDate) => {
   return (
      <Popover>
         <PopoverTrigger asChild>
            <FormControl className="w-full">
               <Button
                  id={id}
                  disabled={field.config.disabled}
                  variant={'outline'}
                  className={cn(
                     'pl-3 text-left font-normal',
                     !props.value && 'text-muted-foreground'
                  )}
               >
                  {props.value ? (
                     format(props.value, 'dd/MM/yyyy')
                  ) : (
                     <span>{field.config.placeholder}</span>
                  )}
                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
               </Button>
            </FormControl>
         </PopoverTrigger>
         <PopoverContent className="w-auto p-0" align="start">
            <Calendar
               mode="single"
               selected={props.value}
               onSelect={props.onChange}
               locale={ptBR}
               // disabled={(date) =>
               //    date > new Date() || date < new Date('1900-01-01')
               // }
               initialFocus
            />
         </PopoverContent>
      </Popover>
   )
}

FwInputDate.displayName = 'FwInputDate'

export { FwInputDate }
