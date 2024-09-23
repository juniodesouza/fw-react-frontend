import { FormControl } from '@/components/ui/form'
import { ControllerRenderProps } from 'react-hook-form'
import { FieldTextarea, TextareaConfig } from '../../types'
import { Textarea } from '@/components/ui/textarea'

interface FwInputTextarea {
   id: string
   field: FieldTextarea
   props: ControllerRenderProps<{ [x: string]: any }, string>
}

const FwInputTextarea = ({ id, field, props }: FwInputTextarea) => {
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

FwInputTextarea.displayName = 'FwInputTextarea'

export { FwInputTextarea }
