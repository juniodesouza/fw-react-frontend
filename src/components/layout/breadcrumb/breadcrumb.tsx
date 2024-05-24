import {
   Breadcrumb,
   BreadcrumbItem,
   BreadcrumbLink,
   BreadcrumbList,
   BreadcrumbPage,
   BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { Link } from 'react-router-dom'

const FWBreadcrumb = () => {
   return (
      <Breadcrumb>
         <BreadcrumbList>
            <BreadcrumbItem>
               <BreadcrumbLink asChild>
                  <Link to="">Início</Link>
               </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
               <BreadcrumbLink asChild>
                  <Link to="">Carros</Link>
               </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
               <BreadcrumbPage>Revisões</BreadcrumbPage>
            </BreadcrumbItem>
         </BreadcrumbList>
      </Breadcrumb>
   )
}

export default FWBreadcrumb
