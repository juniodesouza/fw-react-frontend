import { CrudLayout } from './crud-layout'
import { ModelConfig } from '../../types'
import { CrudEdit } from '../core/crud-edit'
import { useNavigate, useParams } from 'react-router-dom'

interface CrudEditPageProps {
   children: React.ReactNode
   model: ModelConfig
}

const CrudEditPage = ({ children, model }: CrudEditPageProps) => {
   const navigate = useNavigate()
   const { id } = useParams()

   const onCancel = () => {
      navigate(`/app/${model.route}`)
   }

   return (
      <CrudLayout title={model.label}>
         <CrudEdit model={model} id={id} onCancel={onCancel}>
            {children}
         </CrudEdit>
      </CrudLayout>
   )
}

export { CrudEditPage }
