import { z } from 'zod'
import { DateConfig } from '@/lib/fw/types'

const dateValidator = (config: DateConfig) => {
   let schema

   if (config.require) {
      schema = z.date({ message: 'Este campo é obrigatório' })
   } else {
      schema = z.date().optional()
   }

   return schema
}

export default dateValidator
