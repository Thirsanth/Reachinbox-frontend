import './App.css'
import LoginPage from './components/LoginPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Onebox from './components/Onebox'
import Maildisp from './components/Maildisp'
function App() {


  return (
  <div className='h-screen bg-black'>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LoginPage />} />
      <Route path='/onebox' element={<Onebox />} />
      <Route path='/maildisp' element={<Maildisp /> } />
    </Routes>
    </BrowserRouter>
  </div>
  )
}

export default App
