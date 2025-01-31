import { z } from 'zod'
import { FileConfig } from '../types'

export const fileValidator = (config: FileConfig) => {
   let schema = z.string()

   if (config.require) {
      schema = schema.min(1, {
         message: 'Este campo é obrigatório',
      })
   }

   return schema.transform((val) => (val === '' ? null : val))
}
