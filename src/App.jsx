import { Navbar } from './components/Navbar'

import { Outlet } from 'react-router'
import './App.css'

function App() {
  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
    
    </>
  )
}

export default App
