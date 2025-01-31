import { FormControl } from '@/components/ui/form'
import { ControllerRenderProps } from 'react-hook-form'
import { FieldTextEditor, TextareaConfig } from '../../types'
import { Textarea } from '@/components/ui/textarea'

interface InputTextEditorProps {
   id: string
   field: FieldTextEditor
   props: ControllerRenderProps<{ [x: string]: any }, string>
}

const InputTextEditor = ({ id, field, props }: InputTextEditorProps) => {
   const config = field.config as TextareaConfig

   return (
      <FormControl className="w-full">
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

InputTextEditor.displayName = 'InputTextEditor'

export { InputTextEditor }
