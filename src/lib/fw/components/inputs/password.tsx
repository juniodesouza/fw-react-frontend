import { ControllerRenderProps } from 'react-hook-form'
import { FieldPassword, PasswordConfig } from '../../types'
import { Password } from 'primereact/password'

interface FwInputPassword {
   id: string
   field: FieldPassword
   invalid: boolean
   props: ControllerRenderProps<{ [x: string]: any }, string>
}

const FwInputPassword = ({ id, field, invalid, props }: FwInputPassword) => {
   const config = field.config as PasswordConfig

   return (
      <Password
         invalid={invalid}
         inputId={id}
         inputClassName="w-full"
         feedback={false}
         toggleMask={true}
         placeholder={config.placeholder}
         disabled={config.disabled}
         {...props}
      />
   )
}
FwInputPassword.displayName = 'FwInputPassword'

export { FwInputPassword }
