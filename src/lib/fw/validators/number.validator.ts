import { z } from 'zod'
import { NumberConfig } from '../types'

export const numberValidator = (config: NumberConfig) => {
   const schema = z.string().transform((val, ctx) => {
      if (val == '') {
         if (config.require) {
            ctx.addIssue({
               code: z.ZodIssueCode.custom,
               message: 'Este campo é obrigatório',
            })
            return z.NEVER
         } else {
            return null
         }
      }

      const parsed = parseInt(val)

      if (config.min && parsed < config.min) {
         ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: 'O valor deve ser no mínimo ' + config.min,
         })
         return z.NEVER
      }

      if (config.max && parsed > config.max) {
         ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: 'O valor deve ser no máximo ' + config.max,
         })
         return z.NEVER
      }

      return parsed
   })

   return schema
}
