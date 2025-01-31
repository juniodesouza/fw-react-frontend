import { z } from 'zod'
import { DateConfig } from '../types'

export const dateValidator = (config: DateConfig) => {
   let schema

   if (config.require) {
      schema = z.date({ message: 'Este campo é obrigatório' })
   } else {
      schema = z.date().or(z.literal(''))
   }

   return schema.transform((val) => (val === '' ? null : val))
}
