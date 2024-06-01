import { Button } from '@/components/ui/button'
import { ModelConfig } from './types'
import { Card, CardContent } from '@/components/ui/card'
import { Link } from 'react-router-dom'
import FWBreadcrumb from '@/components/layout/breadcrumb/breadcrumb'
import FWDataTable, { onRefreshTable } from './components/datatable/data-table'

interface CrudListInput {
   model: ModelConfig
   description?: string
   onRefreshTable?: onRefreshTable
}

const FWCrudList = ({ model, description, onRefreshTable }: CrudListInput) => {
   const fields = model.fields

   return (
      <div className="space-y-4">
         <FWBreadcrumb />
         <div className="flex items-end gap-2 align-middle">
            <div className="flex-1">
               <h1 className="text-3xl font-bold">{model.label}</h1>
               {description && (
                  <p className="text-sm italic text-muted-foreground">
                     {description}
                  </p>
               )}
            </div>
            <Button size="sm" className="px-4" asChild>
               <Link to={`/app/${model.route}/create`}>Novo registro</Link>
            </Button>
         </div>
         <Card className="mt-0 rounded-sm">
            <CardContent className="pt-6">
               <FWDataTable
                  fields={fields}
                  route={model.route}
                  onRefreshTable={onRefreshTable}
               />
            </CardContent>
         </Card>
      </div>
   )
}

export { FWCrudList }
export type { onRefreshTable }
