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
          <Route path="/" element= {<News pagesize={10} country='us' category="science" newstitlename="All News"/>} />
          <Route path="/business" element= {<News key= "business" pagesize={10} country='us' category="business" newstitlename="Business"/>} />
          <Route path="/entertainment" element= {<News key= "entertainment" pagesize={10} country='us' category="entertainment" newstitlename="Entertainment"/>} />
          <Route path="/general" element= {<News key= "general" pagesize={10} country='us' category="general" newstitlename="General"/>} />
          <Route path="/health" element= {<News key= "health" pagesize={10} country='us' category="health" newstitlename="Health"/>} />
          <Route path="/science" element= {<News key= "science" pagesize={10} country='us' category="science" newstitlename="Science"/>} />
          <Route path="/sports" element= {<News key= "sports" pagesize={10} country='us' category="sports" newstitlename="Sports"/>} />
          <Route path="/technology" element= {<News key= "technology" pagesize={10} country='us' category="technology" newstitlename="Technology"/>} />
          <Route path='/about' element= {<About />} />
          <Route path='*' element={<Notfoundpage />}/>
        </Routes>

        <Footer />
    </>
  )
}

export default App
