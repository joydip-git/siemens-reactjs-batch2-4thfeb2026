import { createRoot } from 'react-dom/client'
//import './index.css'
import './theme.min.css'
import App from './components/app/App'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from "react-redux";
import PmsAppStore from './redux/store';

createRoot(document.getElementById('root')!).render(
    <Provider store={PmsAppStore}>
        <Router>
            <App />
        </Router>
    </Provider>
)
