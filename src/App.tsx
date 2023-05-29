import {Outlet} from 'react-router-dom'
import { Header }  from './components'
import './App.css'

const App = () => {
 
  return (
    <div>
      <Header/>
      <main className='container main'>
        <Outlet />
      </main>
    </div>
  )
}

export default App