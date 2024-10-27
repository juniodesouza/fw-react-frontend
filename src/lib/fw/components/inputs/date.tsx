import { ControllerRenderProps } from 'react-hook-form'
import { DateConfig, FieldDate } from '../../types'
import { Calendar } from 'primereact/calendar'
import { addLocale } from 'primereact/api'

interface FwInputDate {
   id: string
   field: FieldDate
   invalid: boolean
   props: ControllerRenderProps<{ [x: string]: any }, string>
}

const FwInputDate = ({ id, field, invalid, props }: FwInputDate) => {
   const config = field.config as DateConfig

   addLocale('pt-br', {
      firstDayOfWeek: 0,
      dayNames: [
         'domingo',
         'segunda-feira',
         'terça-feira',
         'quarta-feira',
         'quinta-feira',
         'sexta-feira',
         'sábado',
      ],
      dayNamesShort: ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sáb'],
      dayNamesMin: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
      monthNames: [
         'janeiro',
         'fevereiro',
         'março',
         'abril',
         'maio',
         'junho',
         'julho',
         'agosto',
         'setembro',
         'outubro',
         'novembro',
         'dezembro',
      ],
      monthNamesShort: [
         'jan',
         'fev',
         'mar',
         'abr',
         'mai',
         'jun',
         'jul',
         'ago',
         'set',
         'out',
         'nov',
         'dez',
      ],
      today: 'Hoje',
      clear: 'Limpar',
   })

   return (
      <Calendar
         invalid={invalid}
         inputId={id}
         disabled={config.disabled}
         dateFormat="dd/mm/yy"
         locale="pt-br"
         showIcon={true}
         placeholder={'dd/mm/yyyy'}
         {...props}
      />
   )
}

FwInputDate.displayName = 'FwInputDate'

export { FwInputDate }
