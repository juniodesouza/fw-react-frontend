import { z } from 'zod'
import { FileConfig } from '@/lib/fw/types'

const fileValidator = (config: FileConfig) => {
   let schema = z.string()

   if (config.require) {
      schema = schema.min(1, {
         message: 'Este campo é obrigatório',
      })
   }

   return schema
}

export default fileValidator
