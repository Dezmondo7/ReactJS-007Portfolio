{/* import { HashRouter as Router, Routes, Route } from 'react-router-dom';} */}
import React from "react";
import Home from './pages/Home';
import NavBar from './pages/NavBar';
import Footer from './components/Footer';
import Projects from './pages/Projects';
import Cardsgallery from './pages/Cardsgallery';
import ContactForm from './pages/ContactForm';
import {BrowserRouter as Router} from 'react-router-dom';

function App() {

  return (
    <div className='page-container'>
      <div className='contenet-wrapper'>
        <Router>
          <NavBar />
          <Home />
        {/*}  <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Github" element={<Cardsgallery />} />
            <Route path="/Contact" element={<ContactForm />} />
          </Routes > */}
        </Router >
      </div>
      <Footer />
    </div>
  );
}

export default App;
