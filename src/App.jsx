import './App.css'
import { useState } from 'react'
import Main from './components/Main'  
import Aurora from './components/Aurora'
import Nav from './components/nav'
import Hero from './components/Hero'
import Welcome from './components/Welcome'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="fixed inset-0 -z-10 overflow-hidden bg-black"><Aurora /></div>
      <div><Nav /></div>
      <div></div>
      <div></div>
    </>
  )
}

export default App
