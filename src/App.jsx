import Navbar from './Navbar'
import Hero from './Herosection'
import Features from './Features'
import BorderGlow from './reactbits/BorderGlow'
import Upload from './Upload'
import Footer from './Footer'
import Contacts from './Contacts'
import About from './About'
import HowItWorks from './HowItWorks'
import { Routes, Route, useLocation} from 'react-router-dom'

function App() {
  const location = useLocation();

  return (
    <>
        <Navbar />
    <div className='page-transition' key={location.pathname}>
        <Routes>
          <Route path='/' element={<Hero />} />
          <Route path='/upload' element={<Upload />} />
          <Route path='/features' element={<Features />} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path='/about' element={<About />} />
          <Route path='/how-it-works' element={<HowItWorks />} />
        </Routes>
      </div>
      <BorderGlow />
      <Footer />
    </>
  )
}

export default App
