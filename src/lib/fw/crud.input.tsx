import { ControllerRenderProps } from 'react-hook-form'
import { Field } from './types'
import { FwInputNumber } from './components/inputs/number'
import { FwInputString } from './components/inputs/string'
import { FwInputPassword } from './components/inputs/password'
import { FwInputAutoComplete } from './components/inputs/autocomplete'
import { FwInputSelect } from './components/inputs/select'
import { FwInputBoolean } from './components/inputs/boolean'
import { FwInputDate } from './components/inputs/date'
import { FwInputTextarea } from './components/inputs/textarea'
import { FwInputFloat } from './components/inputs/float'
import { FwInputTextEditor } from './components/inputs/texteditor'
import { FwInputTime } from './components/inputs/time'
import { FwInputFile } from './components/inputs/file'
import { FwInputCurrency } from './components/inputs/currency'

interface ICrudInput {
   id: string
   field: Field
   props: ControllerRenderProps<{ [x: string]: any }, string>
}

export function CrudInput({ id, field, props }: ICrudInput) {
   switch (field.type) {
      case 'number':
         return <FwInputNumber id={id} field={field} props={props} />

      case 'string':
         return <FwInputString id={id} field={field} props={props} />

      case 'password':
         return <FwInputPassword id={id} field={field} props={props} />

      case 'autocomplete':
         return <FwInputAutoComplete id={id} field={field} props={props} />

      case 'select':
         return <FwInputSelect id={id} field={field} props={props} />

      case 'boolean':
         return <FwInputBoolean id={id} field={field} props={props} />

      case 'date':
         return <FwInputDate id={id} field={field} props={props} />

      case 'float':
         return <FwInputFloat id={id} field={field} props={props} />

      case 'currency':
         return <FwInputCurrency id={id} field={field} props={props} />

      case 'textarea':
         return <FwInputTextarea id={id} field={field} props={props} />

      case 'texteditor':
         return <FwInputTextEditor id={id} field={field} props={props} />

      case 'time':
         return <FwInputTime id={id} field={field} props={props} />

      case 'file':
         return <FwInputFile id={id} field={field} props={props} />
   }
}
