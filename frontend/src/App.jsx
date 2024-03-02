import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import About from './pages/About';
import Appointment from './pages/Appointment';
import Services from './pages/Services';

// import { inject } from '@vercel/analytics';
 
// inject();

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
