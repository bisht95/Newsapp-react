//import { useState } from 'react'
import './App.css'
import Navbar from './component/Navbar'
import News from './component/News'

function App() {


  return (
    <>
        <Navbar/>
        <News pagesize={10} country='us' category="health"/>
    </>
  )
}

export default App
