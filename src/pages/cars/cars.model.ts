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
         label: 'Código',
         type: 'number',
         edit: false,
         list: true,
         config: {
            require: true,
            placeholder: 'Informe o id',
            // disabled: true,
         },
      },

      // String
      name: {
         label: 'Nome',
         type: 'string',
         edit: true,
         list: true,
         config: {
            require: true,
            placeholder: 'Informe o nome completo',
         },
      },

      // Autocomplete
      brand: {
         label: 'Marca',
         type: 'autocomplete',
         edit: true,
         list: true,
         config: {
            require: true,
            route: 'brands',
            dependencies: ['name'],
         },
      },

      // List
      month: {
         label: 'Mês',
         type: 'select',
         edit: true,
         list: true,
         config: {
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

      // Boolean
      status: {
         label: 'Status',
         type: 'boolean',
         edit: true,
         list: true,
         config: {
            require: true,
            labelTrue: 'Ativo',
            labelFalse: 'Inativo',
            default: true,
         },
      },

      // Date
      saleDate: {
         label: 'Data de Venda',
         type: 'date',
         edit: true,
         list: true,
         config: {
            // disabled: true,
            // placeholder: 'Informe a data de venda',
            require: true,
         },
      },

      // Currency
      size: {
         label: 'Tamanho',
         type: 'float',
         edit: true,
         list: true,
         config: {
            require: true,
         },
      },

      // Currency
      price: {
         label: 'Preço',
         type: 'float',
         edit: true,
         list: true,
         config: {
            require: true,
            currency: true,
         },
      },

      // CNPJ
      cnpj: {
         label: 'CNPJ',
         type: 'string',
         edit: true,
         list: true,
         config: {
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
            require: true,
            cpf: true,
         },
      },

      // E-mail
      email: {
         label: 'E-mail',
         type: 'string',
         edit: true,
         list: true,
         config: {
            require: true,
            email: true,
         },
      },

      // Textarea
      description: {
         label: 'Descrição',
         type: 'textarea',
         edit: true,
         list: true,
         config: {
            require: true,
         },
      },

      // Ckeditor
      content: {
         label: 'Conteudo',
         type: 'texteditor',
         edit: true,
         list: true,
         config: {
            require: true,
         },
      },

      // Password
      password: {
         label: 'Senha',
         type: 'password',
         edit: true,
         list: true,
         config: {
            require: true,
            placeholder: 'Informe a senha',
         },
      },

      // Time
      time: {
         label: 'Horário',
         type: 'time',
         edit: true,
         list: true,
         config: {
            require: true,
         },
      },

      // Upload
      file: {
         label: 'Arquivo',
         type: 'file',
         edit: true,
         list: true,
         config: {
            require: true,
            container: 'anexos',
            preview: true,
            dragAndDrop: true,
            acceptedFiles: ['image/*'],
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
