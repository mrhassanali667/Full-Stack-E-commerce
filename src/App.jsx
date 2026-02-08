import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar.jsx'

function App() {

  return (
    <>
      <div className='h-screen w-screen font-sans'>
        <Navbar />
      </div>
    </>
  )
}

export default App
