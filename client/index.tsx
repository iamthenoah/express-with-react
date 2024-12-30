import { createRoot } from 'react-dom/client'
import { App } from './src/App'

const root = document.getElementById('root') as HTMLElement

createRoot(root).render(<App />)
