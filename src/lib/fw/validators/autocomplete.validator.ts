import { z } from 'zod'
import { AutocompleteConfig } from '../types'

export const autocompleteValidator = (config: AutocompleteConfig) => {
   let schema = z.string()

   if (config.require) {
      schema = z.string().min(1, {
         message: 'Este campo é obrigatório',
      })
   }

   return schema.transform((val) => (val === '' ? null : val))
}
