import { z } from 'zod'
import { AutocompleteConfig } from '@/lib/fw/types'

const autocompleteValidator = (config: AutocompleteConfig) => {
   let schema = z.string()

   if (config.require) {
      schema = schema.min(1, {
         message: 'Este campo é obrigatório',
      })
   }

   return schema
}

export default autocompleteValidator
