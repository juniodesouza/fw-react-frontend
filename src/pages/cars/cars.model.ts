import { ModelConfig } from '@/lib/fw/types'

const CarroModel: ModelConfig = {
   label: 'Carros',
   route: 'cars',
   settings: {
      create: true,
      edit: true,
      delete: true,
   },
   fields: {
      // Number
      id: {
         label: 'Number',
         type: 'number',
         edit: true,
         list: true,
         config: {
            size: 2,
            require: true,
            max: 10,
            min: 5,
            placeholder: 'Informe o id',
            // disabled: true,
         },
      },

      // String
      name: {
         label: 'String',
         type: 'string',
         edit: true,
         list: true,
         config: {
            size: 4,
            require: true,
            placeholder: 'Informe o nome completo',
         },
      },

      // E-mail
      email: {
         label: 'E-mail',
         type: 'string',
         edit: true,
         list: true,
         config: {
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
         edit: true,
         list: true,
         config: {
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
         edit: true,
         list: true,
         config: {
            size: 3,
            require: true,
            cnpj: true,
         },
      },

      // CPF
      cpf: {
         label: 'CPF',
         type: 'string',
         edit: true,
         list: true,
         config: {
            size: 3,
            require: true,
            cpf: true,
         },
      },

      // Phone
      phone: {
         label: 'Phone',
         type: 'string',
         edit: true,
         list: true,
         config: {
            size: 3,
            require: true,
            phone: true,
         },
      },

      // Cep
      cep: {
         label: 'Cep',
         type: 'string',
         edit: true,
         list: true,
         config: {
            size: 3,
            require: true,
            cep: true,
         },
      },

      // List
      month: {
         label: 'List',
         type: 'select',
         edit: true,
         list: true,
         config: {
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
         edit: true,
         list: true,
         config: {
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
         edit: true,
         list: true,
         config: {
            size: 2,
            require: true,
         },
      },

      // Float
      size: {
         label: 'Float',
         type: 'float',
         edit: true,
         list: true,
         config: {
            size: 2,
            require: true,
         },
      },

      // Currency
      price: {
         label: 'Currency',
         type: 'float',
         edit: true,
         list: true,
         config: {
            size: 2,
            require: true,
            currency: true,
         },
      },

      // Password
      password: {
         label: 'Password',
         type: 'password',
         edit: true,
         list: true,
         config: {
            size: 3,
            require: true,
            placeholder: 'Informe a senha',
         },
      },

      // Autocomplete
      brand: {
         label: 'Autocomplete',
         type: 'autocomplete',
         edit: true,
         list: true,
         config: {
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
         edit: true,
         list: true,
         config: {
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
         edit: true,
         list: true,
         config: {
            size: 12,
            require: true,
            placeholder: 'Informe a descrição',
         },
      },

      // Texteditor
      content: {
         label: 'Texteditor',
         type: 'texteditor',
         edit: true,
         list: true,
         config: {
            size: 12,
            require: true,
            placeholder: 'Informe o conteúdo',
         },
      },
   },
   tabs: {
      revisoes: {
         label: 'Revisões',
         route: 'revisoes',
         settings: {
            create: true,
            edit: true,
            delete: true,
         },
         fields: {
            id: {
               label: 'Id',
               type: 'number',
               edit: true,
               list: true,
               config: {
                  require: true,
               },
            },
            date: {
               label: 'Data',
               type: 'date',
               edit: true,
               list: true,
               config: {
                  require: true,
               },
            },
            description: {
               label: 'Descrição',
               type: 'string',
               edit: true,
               list: true,
               config: {
                  require: true,
               },
            },
         },
      },
   },
}

export default CarroModel
