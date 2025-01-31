import { FormControl } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { ControllerRenderProps } from 'react-hook-form'
import { FieldFile } from '../../types'

interface InputFileProps {
   id: string
   field: FieldFile
   props: ControllerRenderProps<{ [x: string]: any }, string>
}

const InputFile = ({ id, field, props }: InputFileProps) => {
   return (
      <FormControl className="w-full">
         <Input
            id={id}
            type="file"
            disabled={field.config.disabled}
            {...props}
         />
      </FormControl>
   )
}

InputFile.displayName = 'InputFile'

export { InputFile }
