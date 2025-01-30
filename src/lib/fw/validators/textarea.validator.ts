import { z } from 'zod'
import { TextareaConfig } from '@/lib/fw/types'

const textareaValidator = (config: TextareaConfig) => {
   let schema = z.string()

   if (config.require) {
      schema = schema.min(1, {
         message: 'Este campo é obrigatório',
      })
   }

   return schema
}

export default textareaValidator
