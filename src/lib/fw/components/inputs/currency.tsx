import { FormControl } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { ControllerRenderProps } from 'react-hook-form'
import { CurrencyConfig, FieldCurrency } from '../../types'

interface InputCurrencyProps {
   id: string
   field: FieldCurrency
   props: ControllerRenderProps<{ [x: string]: any }, string>
}

const InputCurrency = ({ id, field, props }: InputCurrencyProps) => {
   const config = field.config as CurrencyConfig

   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      let newValue = e.target.value

      newValue = newValue.replace(/\D/g, '')

      if (newValue == '') {
         return props.onChange && props.onChange(e)
      }

      const numericValue = parseFloat(newValue) / 100

      const formattedValue = new Intl.NumberFormat('pt-BR', {
         minimumFractionDigits: 2,
         maximumFractionDigits: 2,
         useGrouping: true,
      }).format(numericValue)

      const regex = new RegExp(`^\\d*,?\\d{0,2}$`)
      if (regex.test(newValue)) {
         const formattedEvent = {
            ...e,
            target: {
               ...e.target,
               value: formattedValue,
            },
         }

         props.onChange && props.onChange(formattedEvent)
      }
   }

   return (
      <FormControl className="w-full">
         <div className="relative">
            <span className="absolute left-3 top-2 text-sm text-muted-foreground">
               {config.prefix || 'R$'}
            </span>
            <Input
               id={id}
               type="text"
               inputMode="decimal"
               className="pl-9"
               placeholder={config.placeholder}
               disabled={config.disabled}
               {...props}
               onChange={handleChange}
            />
         </div>
      </FormControl>
   )
}

InputCurrency.displayName = 'InputCurrency'

export { InputCurrency }
