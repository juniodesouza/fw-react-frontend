import { z } from 'zod'
import { TextareaConfig } from '../types'

export const textareaValidator = (config: TextareaConfig) => {
   let schema = z.string()

   if (config.require) {
      schema = schema.min(1, {
         message: 'Este campo é obrigatório',
      })
   }

   return schema.transform((val) => (val === '' ? null : val))
}
