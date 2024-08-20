import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/Header'
import LoginPage from './components/LoginPage'
function App() {
  const [count, setCount] = useState(0)

  return (
  <div className='h-screen bg-black'>
    {/* <NavBar /> */}
    <LoginPage />
    {/* <h1 className='text-3xl font-bold underline'>hello world</h1> */}
  </div>
  )
}

export default App
