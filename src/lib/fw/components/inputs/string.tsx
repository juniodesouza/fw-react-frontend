import { FormControl } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { ControllerRenderProps } from 'react-hook-form'
import { FieldString } from '../../types'
import InputMask from '@mona-health/react-input-mask'

interface FwInputString {
   id: string
   field: FieldString
   props: ControllerRenderProps<{ [x: string]: any }, string>
}

const masks = {
   cnpj: '99.999.999/9999-99',
   cpf: '999.999.999-99',
   phone: '(99) 9999-9999',
   cep: '99999-999',
}

const FwInputString = ({ id, field, props }: FwInputString) => {
   const jsxInput = (
      <Input
         id={id}
         type="text"
         placeholder={field.config.placeholder}
         disabled={field.config.disabled}
         {...props}
      />
   )

   // CNPJ
   if (field.config.cnpj) {
      return (
         <FormControl className="w-full">
            <InputMask
               mask={masks.cnpj}
               value={props.value}
               onChange={props.onChange}
               onBlur={props.onBlur}
            >
               {jsxInput}
            </InputMask>
         </FormControl>
      )
   }

   // CPF
   if (field.config.cpf) {
      return (
         <FormControl className="w-full">
            <InputMask
               mask={masks.cpf}
               value={props.value}
               onChange={props.onChange}
               onBlur={props.onBlur}
            >
               {jsxInput}
            </InputMask>
         </FormControl>
      )
   }

   // Phone
   if (field.config.phone) {
      return (
         <FormControl className="w-full">
            <InputMask
               mask={masks.phone}
               value={props.value}
               onChange={props.onChange}
               onBlur={props.onBlur}
            >
               {jsxInput}
            </InputMask>
         </FormControl>
      )
   }

   // CEP
   if (field.config.cep) {
      return (
         <FormControl className="w-full">
            <InputMask
               mask={masks.cep}
               value={props.value}
               onChange={props.onChange}
               onBlur={props.onBlur}
            >
               {jsxInput}
            </InputMask>
         </FormControl>
      )
   }

   // Custom Mask
   if (field.config.customMask) {
      return (
         <FormControl className="w-full">
            <InputMask
               mask={field.config.customMask}
               value={props.value}
               onChange={props.onChange}
               onBlur={props.onBlur}
            >
               {jsxInput}
            </InputMask>
         </FormControl>
      )
   }

   return <FormControl className="w-full">{jsxInput}</FormControl>
}

FwInputString.displayName = 'FwInputString'

export { FwInputString }
