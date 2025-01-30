import { z } from 'zod'
import { StringConfig } from '@/lib/fw/types'

const stringValidator = (config: StringConfig) => {
   let schema = z.string()

   if (config.require) {
      schema = schema.min(1, {
         message: 'Este campo é obrigatório',
      })
   }

   if (config.email) {
      schema = schema.email({
         message: 'E-mail inválido',
      })
   }

   if (config.cnpj) {
      schema = schema.regex(/^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/, {
         message: 'CNPJ inválido',
      })
   }

   if (config.cpf) {
      schema = schema.regex(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, {
         message: 'CPF inválido',
      })
   }

   if (config.phone) {
      schema = schema.regex(/^\(\d{2}\) \d{4,5}-\d{4}$/, {
         message: 'Telefone inválido',
      })
   }

   if (config.cep) {
      schema = schema.regex(/^\d{5}-\d{3}$/, {
         message: 'CEP inválido',
      })
   }

   return schema
}

export default stringValidator
