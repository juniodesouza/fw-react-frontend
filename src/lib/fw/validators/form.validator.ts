import {
   AutocompleteConfig,
   BooleanConfig,
   CurrencyConfig,
   DateConfig,
   Fields,
   FileConfig,
   FloatConfig,
   NumberConfig,
   PasswordConfig,
   SelectConfig,
   StringConfig,
   TextareaConfig,
   TextEditorConfig,
   TimeConfig,
} from '../types'
import {
   numberValidator,
   stringValidator,
   booleanValidator,
   selectValidator,
   dateValidator,
   timeValidator,
   floatValidator,
   currencyValidator,
   passwordValidator,
   autocompleteValidator,
   fileValidator,
   textareaValidator,
   texteditorValidator,
} from '.'

export const formValidator = (fields: Fields) => {
   const zobject: { [key: keyof Fields]: any } = {}

   Object.keys(fields).forEach((key: keyof Fields) => {
      const field = fields[key]
      const config = fields[key].config

      switch (field.type) {
         case 'number': {
            zobject[key] = numberValidator(config as NumberConfig)
            break
         }

         case 'string': {
            zobject[key] = stringValidator(config as StringConfig)
            break
         }

         case 'boolean': {
            const booleanConfig = fields[key].config as BooleanConfig
            zobject[key] = booleanValidator(booleanConfig)
            break
         }

         case 'select': {
            zobject[key] = selectValidator(config as SelectConfig)
            break
         }

         case 'date': {
            zobject[key] = dateValidator(config as DateConfig)
            break
         }

         case 'time': {
            zobject[key] = timeValidator(config as TimeConfig)
            break
         }

         case 'float': {
            zobject[key] = floatValidator(config as FloatConfig)
            break
         }

         case 'currency': {
            zobject[key] = currencyValidator(config as CurrencyConfig)
            break
         }

         case 'password': {
            zobject[key] = passwordValidator(config as PasswordConfig)
            break
         }

         case 'autocomplete': {
            zobject[key] = autocompleteValidator(config as AutocompleteConfig)
            break
         }

         case 'file': {
            zobject[key] = fileValidator(config as FileConfig)
            break
         }

         case 'textarea': {
            zobject[key] = textareaValidator(config as TextareaConfig)
            break
         }

         case 'texteditor': {
            zobject[key] = texteditorValidator(config as TextEditorConfig)
            break
         }
      }
   })

   return zobject
}
