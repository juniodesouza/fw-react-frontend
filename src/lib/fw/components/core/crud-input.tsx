import { ControllerRenderProps } from 'react-hook-form'
import { Field } from '../../types'
import {
   InputAutoComplete,
   InputBoolean,
   InputCurrency,
   InputDate,
   InputFile,
   InputFloat,
   InputNumber,
   InputPassword,
   InputSelect,
   InputString,
   InputTextarea,
   InputTextEditor,
   InputTime,
} from '../inputs'

interface CrudInputProps {
   id: string
   field: Field
   props: ControllerRenderProps<{ [x: string]: any }, string>
}

const CrudInput = ({ id, field, props }: CrudInputProps) => {
   switch (field.type) {
      case 'number':
         return <InputNumber id={id} field={field} props={props} />

      case 'string':
         return <InputString id={id} field={field} props={props} />

      case 'password':
         return <InputPassword id={id} field={field} props={props} />

      case 'autocomplete':
         return <InputAutoComplete id={id} field={field} props={props} />

      case 'select':
         return <InputSelect id={id} field={field} props={props} />

      case 'boolean':
         return <InputBoolean id={id} field={field} props={props} />

      case 'date':
         return <InputDate id={id} field={field} props={props} />

      case 'float':
         return <InputFloat id={id} field={field} props={props} />

      case 'currency':
         return <InputCurrency id={id} field={field} props={props} />

      case 'textarea':
         return <InputTextarea id={id} field={field} props={props} />

      case 'texteditor':
         return <InputTextEditor id={id} field={field} props={props} />

      case 'time':
         return <InputTime id={id} field={field} props={props} />

      case 'file':
         return <InputFile id={id} field={field} props={props} />
   }
}

InputTime.displayName = 'CrudInput'

export { CrudInput }
