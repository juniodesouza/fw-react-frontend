import { ModelConfig } from '@/lib/fw'

const CarroReviewModel: ModelConfig = {
   label: 'Revisões',
   route: 'cars/reviews',
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
}

export default CarroReviewModel
