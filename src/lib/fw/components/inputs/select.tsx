import { ControllerRenderProps } from 'react-hook-form'
import { FieldSelect, SelectConfig } from '../../types'
import { Dropdown } from 'primereact/dropdown'

interface FwInputSelect {
   id: string
   field: FieldSelect
   invalid: boolean
   props: ControllerRenderProps<{ [x: string]: any }, string>
}

const FwInputSelect = ({ id, field, invalid, props }: FwInputSelect) => {
   const config = field.config as SelectConfig

   return (
      <Dropdown
         invalid={invalid}
         inputId={id}
         options={config.itens}
         optionLabel="label"
         checkmark={true}
         placeholder={config.placeholder || 'Selecione'}
         className="md:w-14rem w-full"
         {...props}
      />
   )
}

FwInputSelect.displayName = 'FwInputSelect'

export { FwInputSelect }
