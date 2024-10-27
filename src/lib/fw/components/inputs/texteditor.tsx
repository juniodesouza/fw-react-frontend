import { ControllerRenderProps } from 'react-hook-form'
import { FieldTextEditor, TextEditorConfig } from '../../types'
import { Editor } from 'primereact/editor'

interface FwInputTextEditor {
   id: string
   field: FieldTextEditor
   invalid: boolean
   props: ControllerRenderProps<{ [x: string]: any }, string>
}

const FwInputTextEditor = ({ id, field, props }: FwInputTextEditor) => {
   const config = field.config as TextEditorConfig

   return (
      <Editor
         id={id}
         placeholder={config.placeholder}
         readOnly={config.disabled}
         className="h-[250px] w-full"
         {...props}
      />
   )
}

FwInputTextEditor.displayName = 'FwInputTextEditor'

export { FwInputTextEditor }
