import { z } from 'zod'
import { SelectConfig } from '@/lib/fw/types'

const selectValidator = (config: SelectConfig) => {
   let schema = z.string()

   if (config.require) {
      schema = schema.min(1, {
         message: 'Este campo é obrigatório',
      })
   }

   return schema
}

export default selectValidator
