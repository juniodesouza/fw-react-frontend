import { z } from 'zod'
import { TextEditorConfig } from '@/lib/fw/types'

const texteditorValidator = (config: TextEditorConfig) => {
   let schema = z.string()

   if (config.require) {
      schema = schema.min(1, {
         message: 'Este campo é obrigatório',
      })
   }

   return schema
}

export default texteditorValidator
