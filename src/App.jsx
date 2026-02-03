//import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import About from './component/About'
import Navbar from './component/Navbar'
import News from './component/News'
import Notfoundpage from './component/Notfoundpage'
import Footer from './component/Footer'

function App() {
  return (
    <>
        <Navbar/>
        
        <Routes>
          <Route path="/" element= {<News pagesize={10} country='us' category="health"/>} />
          <Route path="/business" element= {<News key= "business" pagesize={10} country='us' category="business"/>} />
          <Route path="/entertainment" element= {<News key= "entertainment" pagesize={10} country='us' category="entertainment"/>} />
          <Route path="/general" element= {<News key= "general" pagesize={10} country='us' category="general"/>} />
          <Route path="/health" element= {<News key= "health" pagesize={10} country='us' category="health"/>} />
          <Route path="/science" element= {<News key= "science" pagesize={10} country='us' category="science"/>} />
          <Route path="/sports" element= {<News key= "sports" pagesize={10} country='us' category="sports"/>} />
          <Route path="/technology" element= {<News key= "technology" pagesize={10} country='us' category="technology"/>} />
          <Route path='/about' element= {<About />} />
          <Route path='*' element={<Notfoundpage />}/>
        </Routes>

        <Footer />
    </>
  )
}

export default App
