// import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import Home from './components/Home'
import Oneparameter from './components/Oneparameter'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Calculator from './components/Calculator/Calculator';

import Twoparameter from './components/Twoparameter';
import Quadratic from './components/Quadratic';
import Fracexpression from './components/Fracexpression';
import Statics from './components/Statics';
import Calendar from './components/Calendar';
import NewCalendar from './components/NewCalendar';
// import {BrowserRouter ,Route, Routes} from "react-router-dom";



const App = () => {
  
  // const apiKey = process.env.REACT_APP_NEWS_API
  const [progress, setProgress] = useState(3)
  const [refreshKey, setRefreshKey] = useState(0);
  return (
    <BrowserRouter key={refreshKey}>
       <Navbar/>
      <div style={{height:'5px'}}></div>
      <Routes>
       <Route path="/" element={<Home/>} /> 
       <Route path="/oneparameter" element={<Oneparameter/>} /> 
       <Route path="/calculator" element={<Calculator />} /> 
       <Route path="/expression" element={<Fracexpression/>} /> 
       <Route path="/calendar" element={<Calendar/>} /> 
       <Route path="/twoparameter" element={<Twoparameter/>} /> 
       <Route path="/qudratic" element={<Quadratic/>}/> 
       <Route path="/statics" element={<Statics/>} /> 
      </Routes>
    </BrowserRouter >

  )

}

export default App;



