//import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

//App()
createRoot(document.getElementById('root')!).render(
    <App />
)

//const app = new App() -> state -> {}
//const design= app.render()
