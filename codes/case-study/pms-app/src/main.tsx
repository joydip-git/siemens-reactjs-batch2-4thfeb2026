import { createRoot } from 'react-dom/client'
//import './index.css'
import './theme.min.css'
import App from './components/app/App'
import { BrowserRouter as Router} from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
    <Router>
        <App />
    </Router>
)
