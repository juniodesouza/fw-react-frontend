import { FormControl } from '@/components/ui/form'
import { ControllerRenderProps } from 'react-hook-form'
import { Field, TextareaConfig } from '../../types'
import { Textarea } from '@/components/ui/textarea'

interface FwInputTextEditor {
   id: string
   field: Field
   props: ControllerRenderProps<{ [x: string]: any }, string>
}

const FwInputTextEditor = ({ id, field, props }: FwInputTextEditor) => {
   const config = field.config as TextareaConfig

   return (
      <FormControl>
         <Textarea
            id={id}
            placeholder={field.config.placeholder}
            disabled={field.config.disabled}
            rows={config.rows ? config.rows : 2}
            className="resize-none"
            {...props}
         />
      </FormControl>
   )
}

FwInputTextEditor.displayName = 'FwInputTextEditor'

export { FwInputTextEditor }