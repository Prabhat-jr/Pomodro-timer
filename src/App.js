import React from 'react';
import "./App.css"
import Login from './component/Login/Login';
import Signup from './component/Signup/Signup';
import {Route,BrowserRouter as Router, Routes } from "react-router-dom"
import Timer from './component/Timer/Timer';


const App = () => {
  return (
    <div className="appbody">
    <Router>
    <Routes>
    <Route path="/" element={<Login/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route  path="/timer" element={<Timer/>}/>
    </Routes>
    </Router>
    </div>
  )
}

export default App
