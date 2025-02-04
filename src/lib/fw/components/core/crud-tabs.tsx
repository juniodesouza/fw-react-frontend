import { Card, CardContent } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

interface CrudTabsProps {
   children: React.ReactNode
}

const CrudTabs = ({ children }: CrudTabsProps) => {
   const tabs = Array.isArray(children) ? children : [children]

   return (
      <Tabs defaultValue={tabs.length > 0 ? tabs[0].props.label : ''}>
         <TabsList className="w-full justify-start">
            {tabs.map((tab: React.ReactElement) => (
               <TabsTrigger
                  key={tab.props.label}
                  className="px-5"
                  value={tab.props.label}
               >
                  {tab.props.label}
               </TabsTrigger>
            ))}
         </TabsList>
         {tabs.map((tab: React.ReactElement) => (
            <TabsContent key={tab.props.label} value={tab.props.label}>
               <Card className="rounded-xl">
                  <CardContent className="pt-6">
                     {tab.props.children}
                  </CardContent>
               </Card>
            </TabsContent>
         ))}
      </Tabs>
   )
}

interface CrudTabProps {
   label: string
   children: React.ReactNode
}

const CrudTab = ({ children }: CrudTabProps) => {
   return <>{children}</>
}

export { CrudTabs, CrudTab }
