import { ControllerRenderProps } from 'react-hook-form'
import { FieldTextarea, TextareaConfig } from '../../types'
import { InputTextarea } from 'primereact/inputtextarea'

interface FwInputTextarea {
   id: string
   field: FieldTextarea
   invalid: boolean
   props: ControllerRenderProps<{ [x: string]: any }, string>
}

const FwInputTextarea = ({ id, field, invalid, props }: FwInputTextarea) => {
   const config = field.config as TextareaConfig

   return (
      <InputTextarea
         invalid={invalid}
         id={id}
         placeholder={config.placeholder}
         disabled={config.disabled}
         rows={config.rows ? config.rows : 2}
         autoResize
         className="w-full"
         {...props}
      />
   )
}

FwInputTextarea.displayName = 'FwInputTextarea'

export { FwInputTextarea }
