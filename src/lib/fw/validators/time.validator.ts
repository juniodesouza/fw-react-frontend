import { z } from 'zod'
import { TimeConfig } from '../types'

export const timeValidator = (config: TimeConfig) => {
   let schema

   schema = z.string().regex(/^$|^([01]\d|2[0-3]):[0-5]\d$/, {
      message: 'Horário inválido',
   })

   if (config.require) {
      schema = schema.min(1, {
         message: 'Este campo é obrigatório',
      })
   }

   return schema.transform((val) => (val === '' ? null : val))
}
