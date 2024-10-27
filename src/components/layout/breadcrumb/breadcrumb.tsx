import { BreadCrumb } from 'primereact/breadcrumb'
import { Link } from 'react-router-dom'

const FWBreadcrumb = () => {
   const items = [
      { label: 'Components' },
      { label: 'Form' },
      {
         label: 'Carros',
         template: () => <Link to="">Carros</Link>,
      },
   ]
   const home = { icon: 'pi pi-home', url: '/' }

   return <BreadCrumb model={items} home={home} />
}

export default FWBreadcrumb
