import { ControllerRenderProps } from 'react-hook-form'
import { FieldFile, FileConfig } from '../../types'
import { FileUpload } from 'primereact/fileupload'

interface FwInputFile {
   id: string
   field: FieldFile
   invalid: boolean
   props: ControllerRenderProps<{ [x: string]: any }, string>
}

const FwInputFile = ({ id, field, props }: FwInputFile) => {
   const config = field.config as FileConfig

   return <FileUpload id={id} disabled={field.config.disabled} {...props} />
}

FwInputFile.displayName = 'FwInputFile'

export { FwInputFile }
