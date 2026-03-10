import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './component/About';
import Navbar from './component/Navbar';
import News from './component/News';
import Notfoundpage from './component/Notfoundpage';
import Footer from './component/Footer'
import LoadingBar from 'react-top-loading-bar';



function App() {
  const pagesize = 10;
  const apiKey = import.meta.env.VITE_NEWS_API_KEY;
  const [progress, setProgress] = useState(0)

  return (
    <>
      <Navbar />

      <LoadingBar color="#f11946" progress={progress} />


      <Routes>
        <Route path="/" element={<News setProgress={setProgress} pagesize={pagesize} apiKey={apiKey} country='us' category="science" newstitlename="All News" />} />
        <Route path="/business" element={<News setProgress={setProgress} key="business" pagesize={pagesize} apiKey={apiKey} country='us' category="business" newstitlename="Business" />} />
        <Route path="/entertainment" element={<News setProgress={setProgress} key="entertainment" pagesize={pagesize} apiKey={apiKey} country='us' category="entertainment" newstitlename="Entertainment" />} />
        <Route path="/general" element={<News setProgress={setProgress} key="general" pagesize={pagesize} apiKey={apiKey} country='us' category="general" newstitlename="General" />} />
        <Route path="/health" element={<News setProgress={setProgress} key="health" pagesize={pagesize} apiKey={apiKey} country='us' category="health" newstitlename="Health" />} />
        <Route path="/science" element={<News setProgress={setProgress} key="science" pagesize={pagesize} apiKey={apiKey} country='us' category="science" newstitlename="Science" />} />
        <Route path="/sports" element={<News setProgress={setProgress} key="sports" pagesize={pagesize} apiKey={apiKey} country='us' category="sports" newstitlename="Sports" />} />
        <Route path="/technology" element={<News setProgress={setProgress} key="technology" pagesize={pagesize} apiKey={apiKey} country='us' category="technology" newstitlename="Technology" />} />
        <Route path='/about' element={<About setProgress={setProgress} />} />
        <Route path='*' element={<Notfoundpage />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
