import {
   FieldAutocomplete,
   FieldBoolean,
   FieldCurrency,
   FieldDate,
   FieldFile,
   FieldFloat,
   FieldNumber,
   FieldPassword,
   FieldSelect,
   FieldString,
   FieldTextarea,
   FieldTextEditor,
   FieldTime,
   ModelConfig,
} from '@/lib/fw'

export interface CarroModelConfig extends ModelConfig {
   fields: {
      code: FieldNumber
      name: FieldString
      email: FieldString
      status: FieldBoolean
      cnpj: FieldString
      cpf: FieldString
      phone: FieldString
      cep: FieldString
      placa: FieldString
      month: FieldSelect
      saleDate: FieldDate
      time: FieldTime
      size: FieldFloat
      price: FieldCurrency
      password: FieldPassword
      brand: FieldAutocomplete
      file: FieldFile
      description: FieldTextarea
      content: FieldTextEditor
   }
}

export const CarroModel = {
   label: 'Carros',
   route: 'cars',
   settings: {
      create: true,
      edit: true,
      delete: true,
   },
   fields: {
      // Number
      code: {
         label: 'Number',
         type: 'number',
         config: {
            edit: true,
            list: true,
            size: 2,
            require: true,
            max: 10,
            min: 5,
            placeholder: 'Informe o código',
            // disabled: true,
         },
      },

      // String
      name: {
         label: 'String',
         type: 'string',
         config: {
            edit: true,
            list: true,
            size: 4,
            require: true,
            placeholder: 'Informe o nome completo',
         },
      },

      // E-mail
      email: {
         label: 'E-mail',
         type: 'string',
         config: {
            edit: true,
            list: true,
            size: 5,
            require: true,
            email: true,
            placeholder: 'Informe o e-mail',
         },
      },

      // Boolean
      status: {
         label: 'Boolean',
         type: 'boolean',
         config: {
            edit: true,
            list: true,
            size: 1,
            // labelTrue: 'Ativo',
            // labelFalse: 'Inativo',
            default: true,
         },
      },

      // CNPJ
      cnpj: {
         label: 'CNPJ',
         type: 'string',
         config: {
            edit: true,
            list: true,
            size: 3,
            require: true,
            cnpj: true,
         },
      },

      // CPF
      cpf: {
         label: 'CPF',
         type: 'string',
         config: {
            edit: true,
            list: true,
            size: 3,
            require: true,
            cpf: true,
         },
      },

      // Phone
      phone: {
         label: 'Phone',
         type: 'string',
         config: {
            edit: true,
            list: true,
            size: 3,
            require: true,
            phone: true,
         },
      },

      // Cep
      cep: {
         label: 'Cep',
         type: 'string',
         config: {
            edit: true,
            list: true,
            size: 3,
            require: true,
            cep: true,
         },
      },

      // CustomMask
      placa: {
         label: 'Placa - CustomMask',
         type: 'string',
         config: {
            edit: true,
            list: true,
            size: 12,
            require: true,
            customMask: 'aaa-9999',
         },
      },

      // List
      month: {
         label: 'List',
         type: 'select',
         config: {
            edit: true,
            list: true,
            placeholder: 'Selecione o mês',
            size: 4,
            require: true,
            itens: [
               { value: '1', label: 'Janeiro' },
               { value: '2', label: 'Fevereiro' },
               { value: '3', label: 'Março' },
               { value: '4', label: 'Abril' },
               { value: '5', label: 'Maio' },
               { value: '6', label: 'Junho' },
               { value: '7', label: 'Julho' },
               { value: '8', label: 'Agosto' },
               { value: '9', label: 'Setembro' },
               { value: '10', label: 'Outubro' },
               { value: '11', label: 'Novembro' },
               { value: '12', label: 'Dezembro' },
            ],
         },
      },

      // Date
      saleDate: {
         label: 'Date',
         type: 'date',
         config: {
            edit: true,
            list: true,
            size: 2,
            // disabled: true,
            placeholder: 'Informe a data',
            require: true,
         },
      },

      // Time
      time: {
         label: 'Time',
         type: 'time',
         config: {
            edit: true,
            list: true,
            size: 2,
            require: true,
         },
      },

      // Float
      size: {
         label: 'Float',
         type: 'float',
         config: {
            edit: true,
            list: true,
            size: 2,
            require: true,
            decimalPlaces: 2,
         },
      },

      // Currency
      price: {
         label: 'Currency',
         type: 'currency',
         config: {
            edit: true,
            list: true,
            size: 2,
            require: true,
         },
      },

      // Password
      password: {
         label: 'Password',
         type: 'password',
         config: {
            edit: true,
            list: true,
            size: 3,
            require: true,
            placeholder: 'Informe a senha',
         },
      },

      // Autocomplete
      brand: {
         label: 'Autocomplete',
         type: 'autocomplete',
         config: {
            edit: true,
            list: true,
            size: 4,
            require: true,
            route: 'brands',
            dependencies: ['name'],
         },
      },

      // Upload
      file: {
         label: 'Upload',
         type: 'file',
         config: {
            edit: true,
            list: true,
            size: 5,
            require: true,
            container: 'anexos',
            preview: true,
            dragAndDrop: true,
            acceptedFiles: ['image/*'],
         },
      },

      // Textarea
      description: {
         label: 'Textarea',
         type: 'textarea',
         config: {
            edit: true,
            list: true,
            size: 12,
            require: true,
            placeholder: 'Informe a descrição',
         },
      },

      // Texteditor
      content: {
         label: 'Texteditor',
         type: 'texteditor',
         config: {
            edit: true,
            list: true,
            size: 12,
            require: true,
            placeholder: 'Informe o conteúdo',
         },
      },
   },
} as CarroModelConfig
