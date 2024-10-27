import { ControllerRenderProps } from 'react-hook-form'
import { AutocompleteConfig, FieldAutocomplete } from '../../types'
import {
   AutoComplete,
   AutoCompleteCompleteEvent,
} from 'primereact/autocomplete'
import { useState } from 'react'

interface FwInputAutoComplete {
   id: string
   field: FieldAutocomplete
   invalid: boolean
   props: ControllerRenderProps<{ [x: string]: any }, string>
}

interface Item {
   value: string
   label: string
}

const FwInputAutoComplete = ({
   id,
   field,
   invalid,
   props,
}: FwInputAutoComplete) => {
   const config = field.config as AutocompleteConfig

   const [itens, setItens] = useState<Item[] | []>([])

   const search = (event: AutoCompleteCompleteEvent) => {
      console.log(event)

      const languages = [
         { label: 'English', value: 'en' },
         { label: 'French', value: 'fr' },
         { label: 'German', value: 'de' },
         { label: 'Spanish', value: 'es' },
         { label: 'Portuguese', value: 'pt' },
         { label: 'Russian', value: 'ru' },
         { label: 'Japanese', value: 'ja' },
         { label: 'Korean', value: 'ko' },
         { label: 'Chinese', value: 'zh' },
      ]

      setTimeout(() => {
         setItens(languages)
      }, 250)
   }

   return (
      <AutoComplete
         invalid={invalid}
         inputId={id}
         field="label"
         autoHighlight={true}
         delay={100}
         className="w-full"
         inputClassName="w-full"
         suggestions={itens}
         disabled={config.disabled}
         placeholder={config.placeholder}
         completeMethod={search}
         {...props}
      />
   )
}

FwInputAutoComplete.displayName = 'FwInputAutoComplete'

export { FwInputAutoComplete }
