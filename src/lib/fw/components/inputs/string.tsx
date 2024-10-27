import { ControllerRenderProps } from 'react-hook-form'
import { FieldString, StringConfig } from '../../types'
import { InputText } from 'primereact/inputtext'
import { InputMask } from 'primereact/inputmask'

interface FwInputString {
   id: string
   field: FieldString
   invalid: boolean
   props: ControllerRenderProps<{ [x: string]: any }, string>
}

const getMask = (config: StringConfig) => {
   if (config.cnpj) {
      return '99.999.999/9999-99'
   } else if (config.cpf) {
      return '999.999.999-99'
   } else if (config.phone) {
      return '(99) 9999-9999'
   } else if (config.cep) {
      return '99999-999'
   } else if (config.customMask) {
      return config.customMask
   }
}

const FwInputString = ({ id, field, invalid, props }: FwInputString) => {
   const config = field.config as StringConfig

   if (
      config.cnpj ||
      config.cpf ||
      config.phone ||
      config.cep ||
      config.customMask
   ) {
      return (
         <InputMask
            invalid={invalid}
            id={id}
            autoClear={false}
            mask={getMask(config)}
            className="w-full"
            placeholder={config.placeholder}
            disabled={config.disabled}
            {...props}
         />
      )
   } else {
      return (
         <InputText
            invalid={invalid}
            id={id}
            className="w-full"
            placeholder={config.placeholder}
            disabled={config.disabled}
            {...props}
         />
      )
   }
}

FwInputString.displayName = 'FwInputString'

export { FwInputString }
