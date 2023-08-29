import { Route, Routes } from 'react-router-dom'
import './App.css'
import Registration from './logsystem/Registration'
import Forgot from './logsystem/Forgot'
import Login from './logsystem/Login'
import Navbar from './navfooter/Navbar'

function App() {
 return (

  <>
  <Navbar/>
  <Routes>
    <Route path='/Registration' element={<Registration/>}/>
    <Route path='/forgot' element={<Forgot/>}/>
    <Route path='/' element={<Login/>}/>
  </Routes>
  </>
 )
}

export default App
