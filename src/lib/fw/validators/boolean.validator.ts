import { z } from 'zod'
import { BooleanConfig } from '@/lib/fw/types'

const booleanValidator = (config: BooleanConfig) => {
   const schema = z.coerce
      .boolean({
         required_error: 'Este campo é obrigatório',
      })
      .default(config.default)

   return schema
}

export default booleanValidator
