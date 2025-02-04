// import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { createContext, useContext, useState } from 'react'

type CrudLayoutContextProps =
   | {
        setDescription: (description: string) => void
     }
   | undefined

const CrudLayoutContext = createContext<CrudLayoutContextProps>(undefined)

interface CrudLayoutProps {
   children: React.ReactNode
   title: string
}

const CrudLayout = ({ children, title }: CrudLayoutProps) => {
   const [description, setDescription] = useState<string | ''>('')

   const contextValue: CrudLayoutContextProps = {
      setDescription,
   }

   return (
      <CrudLayoutContext.Provider value={contextValue}>
         <div className="space-y-4 pt-6">
            <div className="flex items-end gap-2 align-middle">
               <div className="flex-1">
                  <h1 className="text-3xl font-bold">{title}</h1>
                  {description && (
                     <p className="text-sm italic text-muted-foreground">
                        {description}
                     </p>
                  )}
               </div>
               {/* <Button variant="outline" size="sm" className="px-4">
                  Exportar
               </Button> */}
            </div>
            <Card className="rounded-xl">
               <CardContent className="pt-6">{children}</CardContent>
            </Card>
         </div>
      </CrudLayoutContext.Provider>
   )
}

const useCrudLayout = () => {
   const context = useContext(CrudLayoutContext)
   if (!context) {
      throw new Error('useCrudLayout must be used within a CrudlayoutProvider')
   }
   return context
}

export { CrudLayout, useCrudLayout }
