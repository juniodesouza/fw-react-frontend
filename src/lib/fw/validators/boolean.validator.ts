import { z } from 'zod'
import { BooleanConfig } from '../types'

export const booleanValidator = (config: BooleanConfig) => {
   const schema = z.coerce
      .boolean({
         required_error: 'Este campo é obrigatório',
      })
      .default(config.default)

   return schema
}
