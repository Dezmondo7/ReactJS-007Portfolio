import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import React from "react";
import Home from './pages/Home';
import NavBar from './pages/NavBar';
import Footer from './components/Footer';
import Projects from './pages/Projects';
import Cardsgallery from './pages/CardsGallery';

function App() {

  return ( 
  <div className='page-container'>
    <div className='contenet-wrapper'>
     <Router>
      <NavBar />
     <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/Projects" element={<Projects />} />
     <Route path="/Cards" element={<Cardsgallery />} />
     </Routes >
     </Router >
   </div>
     <Footer />
   </div>
  );
}

export default App;
