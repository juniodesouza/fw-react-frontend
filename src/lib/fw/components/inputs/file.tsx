import { FormControl } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { ControllerRenderProps } from 'react-hook-form'
import { Field } from '../../types'

interface FwInputFile {
   id: string
   field: Field
   props: ControllerRenderProps<{ [x: string]: any }, string>
}

const FwInputFile = ({ id, field, props }: FwInputFile) => {
   return (
      <FormControl>
         <Input
            id={id}
            type="file"
            placeholder={field.config.placeholder}
            disabled={field.config.disabled}
            {...props}
         />
      </FormControl>
   )
}

FwInputFile.displayName = 'FwInputFile'

export { FwInputFile }
