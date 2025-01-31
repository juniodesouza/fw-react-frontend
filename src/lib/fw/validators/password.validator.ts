import { z } from 'zod'
import { PasswordConfig } from '../types'

export const passwordValidator = (config: PasswordConfig) => {
   let schema = z.string()

   if (config.require) {
      schema = schema.min(1, {
         message: 'Este campo é obrigatório',
      })
   }

   return schema.transform((val) => (val === '' ? null : val))
}
