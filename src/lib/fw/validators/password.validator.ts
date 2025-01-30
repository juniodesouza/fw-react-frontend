import { z } from 'zod'
import { PasswordConfig } from '@/lib/fw/types'

const passwordValidator = (config: PasswordConfig) => {
   let schema = z.string()

   if (config.require) {
      schema = schema.min(1, {
         message: 'Este campo é obrigatório',
      })
   }

   return schema
}

export default passwordValidator
