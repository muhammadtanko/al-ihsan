import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavBar } from './components/navBar'
import HomePage from './pages/home'
import AboutPage from './pages/about'
import ServicesPage from './pages/services';
import ContactPage from './pages/contact';
import MediaPage from './pages/media';
import PaymentPage from './pages/payment';
import MediaDetailPage from './pages/mediaDetailPage';
import AlIhsanBoardPage from './pages/boardPage';
import GetStartedPage from './pages/getStartedPage';
// changes

function App() {

  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/media" element={<MediaPage />} />
          <Route path="/staff" element={<AlIhsanBoardPage />} />
          <Route path="/media/:id" element={<MediaDetailPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/get-started" element={<GetStartedPage />} />
          <Route path="/payment" element={< PaymentPage />} />

        </Routes>
      </Router>
    </>
  )
}

export default App
