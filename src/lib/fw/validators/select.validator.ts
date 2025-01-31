import { z } from 'zod'
import { SelectConfig } from '../types'

export const selectValidator = (config: SelectConfig) => {
   let schema = z.string()

   if (config.require) {
      schema = schema.min(1, {
         message: 'Este campo é obrigatório',
      })
   }

   return schema.transform((val) => (val === '' ? null : val))
}
