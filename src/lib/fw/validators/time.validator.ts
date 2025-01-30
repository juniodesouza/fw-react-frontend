import { z } from 'zod'
import { TimeConfig } from '@/lib/fw/types'

const timeValidator = (config: TimeConfig) => {
   let schema

   schema = z.string()

   if (config.require) {
      schema = schema.min(1, {
         message: 'Este campo é obrigatório',
      })
   }

   schema = schema.regex(/^([01]\d|2[0-3]):[0-5]\d$/, {
      message: 'Horário inválido',
   })

   return schema
}

export default timeValidator
