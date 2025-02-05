import { CrudLayout } from './crud-layout'
import { ModelConfig } from '../../types'
import { CrudList } from '../core/crud-list'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

interface CrudListPageProps {
   children: React.ReactNode
   model: ModelConfig
}

const CrudListPage = ({ children, model }: CrudListPageProps) => {
   const actions = (
      <Button size="sm" className="px-4" asChild>
         <Link to={`/app/${model.route}/create`}>Novo registro</Link>
      </Button>
   )

   return (
      <CrudLayout title={model.label} actions={actions}>
         <CrudList model={model}>{children}</CrudList>
      </CrudLayout>
   )
}

export { CrudListPage }
