import './App.css'
import Banner from '../Banner/Banner'
import { Outlet } from 'react-router-dom'

function App () {
  return (
    <div className='App'>
      <Banner />
      <Outlet />
    </div>
  )
}

export default App
