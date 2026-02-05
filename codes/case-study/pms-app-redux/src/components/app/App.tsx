import AppRoutes from '../../routes/AppRoutes'
import DashBoard from '../common/dash-board/DashBoard'
//import './App.css'

function App() {

  return (
    <div className='container container-fluid'>
      <DashBoard />
      <br />
      <AppRoutes />
    </div>
  )
}

export default App
