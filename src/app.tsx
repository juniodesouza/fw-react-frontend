import { ThemeProvider } from './providers/theme'
import AppRouter from './routes'

function App() {
   return (
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
         <AppRouter />
      </ThemeProvider>
   )
}

export default App
