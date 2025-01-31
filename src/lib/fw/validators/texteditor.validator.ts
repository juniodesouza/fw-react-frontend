import { z } from 'zod'
import { TextEditorConfig } from '../types'

export const texteditorValidator = (config: TextEditorConfig) => {
   let schema = z.string()

   if (config.require) {
      schema = schema.min(1, {
         message: 'Este campo é obrigatório',
      })
   }

   return schema.transform((val) => (val === '' ? null : val))
}
