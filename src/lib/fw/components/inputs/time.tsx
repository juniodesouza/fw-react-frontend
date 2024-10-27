import { ControllerRenderProps } from 'react-hook-form'
import { FieldTime, TimeConfig } from '../../types'
import { Calendar } from 'primereact/calendar'

interface FwInputTime {
   id: string
   field: FieldTime
   invalid: boolean
   props: ControllerRenderProps<{ [x: string]: any }, string>
}

const FwInputTime = ({ id, field, invalid, props }: FwInputTime) => {
   const config = field.config as TimeConfig

   return (
      <Calendar
         invalid={invalid}
         inputId={id}
         disabled={config.disabled}
         placeholder={'hh:mm'}
         timeOnly={true}
         showIcon={true}
         icon={() => <i className="pi pi-clock" />}
         {...props}
      />
   )
}

FwInputTime.displayName = 'FwInputTime'

export { FwInputTime }
