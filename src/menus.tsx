import {
   Car,
   ClipboardPlus,
   FilePenLine,
   Home,
   Receipt,
   VeganIcon,
} from 'lucide-react'

interface MenuUnique {
   unique: true
   title: string
   icon: (size: number) => JSX.Element
   url: string
}

interface MenuWithChildren {
   unique: false
   title: string
   icon: (size: number) => JSX.Element
   itens: { title: string; url: string }[]
}

type Menu = MenuUnique | MenuWithChildren

export const menus: Menu[] = [
   {
      title: 'Início',
      icon: (size) => <Home size={size} />,
      url: '/app/home',
      unique: true,
   },
   {
      title: 'Carros',
      icon: (size) => <Car size={size} />,
      url: '/app/cars',
      unique: true,
   },
   {
      title: 'Orçamentos',
      icon: (size) => <Receipt size={size} />,
      url: '/app/cars/create',
      unique: true,
   },
   {
      title: 'Vistorias',
      icon: (size) => <FilePenLine size={size} />,
      url: '/app/cars',
      unique: true,
   },
   {
      title: 'Laudos',
      icon: (size) => <ClipboardPlus size={size} />,
      url: '/app/cars/create',
      unique: true,
   },
   {
      title: 'Equipamentos',
      icon: (size) => <VeganIcon size={size} />,
      unique: false,
      itens: [
         {
            title: 'Geradores',
            url: '/app/cars',
         },
         {
            title: 'Usinas',
            url: '/app/cars/create',
         },
         {
            title: 'Foltovaltaicos',
            url: '/app/cars',
         },
      ],
   },
   {
      title: 'Produtos',
      icon: (size) => <FilePenLine size={size} />,
      unique: false,
      itens: [
         {
            title: 'Geradores',
            url: '/app/cars',
         },
         {
            title: 'Usinas',
            url: '/app/cars/create',
         },
         {
            title: 'Foltovaltaicos',
            url: '/app/cars',
         },
      ],
   },
]
