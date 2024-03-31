import React from 'react';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from './components/nav.jsx'
import Home from './components/Home'
import Best from './components/Best'
import Featured from './components/featured/Featured'
import Footer from './components/Footer'
import Login from './components/Login.jsx';
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login/>} />
      </Routes>
      <Home/>
      <Best/>
      <Featured/>
      <Footer/>
    </Router>
  );
};

export default App;

