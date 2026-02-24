import { useState } from 'react'
import './App.css'
import Main from './components/Main'  
import Aurora from './components/Aurora'
import Nav from './components/nav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div className="fixed inset-0 -z-10 overflow-hidden bg-black"><Aurora /></div>
      <div > <Nav /> </div>
    
    </div>
  )
}

export default App
