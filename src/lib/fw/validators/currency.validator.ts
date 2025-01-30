import { z } from 'zod'
import { CurrencyConfig } from '@/lib/fw/types'

const currencyValidator = (config: CurrencyConfig) => {
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

      const parsed = parseFloat(val.replace('.', '').replace(',', '.'))

      return parsed
   })

   return schema
}

export default currencyValidator
