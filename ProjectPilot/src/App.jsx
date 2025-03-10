import { useState } from 'react'
// import './App.css'
import SideBar from './components/SideBar'
import Dashboard from './components/Dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex'>
    <SideBar/>
    <Dashboard/>
    </ div>
  )
}

export default App
