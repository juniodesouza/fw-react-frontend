import { FormControl } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { ControllerRenderProps } from 'react-hook-form'
import { FieldFile } from '../../types'

interface FwInputFile {
   id: string
   field: FieldFile
   props: ControllerRenderProps<{ [x: string]: any }, string>
}

const FwInputFile = ({ id, field, props }: FwInputFile) => {
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

FwInputFile.displayName = 'FwInputFile'

export { FwInputFile }
