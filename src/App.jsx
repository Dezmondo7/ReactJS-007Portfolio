import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import React from "react";
import Home from './pages/Home';


function App() {

  return ( 
  <div className='page-container'>
    <div className='contenet-wrapper'>
     <Router>
     <Routes>
     <Route path="/" element={<Home />} />
     </Routes >
     </Router >
   </div>
   </div>
  );
}

export default App;
