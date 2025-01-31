import { z } from 'zod'
import { FloatConfig } from '../types'

export const floatValidator = (config: FloatConfig) => {
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

      const parsed = parseFloat(val.replace(',', '.'))

      return parsed
   })

   return schema
}
