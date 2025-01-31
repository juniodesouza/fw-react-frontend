import { z } from 'zod'
import { StringConfig } from '../types'

export const stringValidator = (config: StringConfig) => {
   let schema = z.string()

   if (config.require) {
      schema = schema.min(1, {
         message: 'Este campo é obrigatório',
      })
   }

   if (config.email) {
      schema = schema.regex(
         /^$|^[a-zA-Z\u0400-\u04FF0-9._%+-]+@[a-zA-Z\u0400-\u04FF0-9.-]+\.[a-zA-Z]{2,}$/,
         {
            message: 'E-mail inválido',
         }
      )
   }

   if (config.cnpj) {
      schema = schema.regex(/^$|^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/, {
         message: 'CNPJ inválido',
      })
   }

   if (config.cpf) {
      schema = schema.regex(/^$|^\d{3}\.\d{3}\.\d{3}-\d{2}$/, {
         message: 'CPF inválido',
      })
   }

   if (config.phone) {
      schema = schema.regex(/^$|^\(\d{2}\) \d{4,5}-\d{4}$/, {
         message: 'Telefone inválido',
      })
   }

   if (config.cep) {
      schema = schema.regex(/^$|^\d{5}-\d{3}$/, {
         message: 'CEP inválido',
      })
   }

   return schema.transform((val) => (val === '' ? null : val))
}
