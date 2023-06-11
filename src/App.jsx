import React from 'react';
import Nav1 from "./Units/Nav1";
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';




export default function App(){

   

return (
    <div>
      <Nav1></Nav1>
       <Routes>
          <Route path="/" element={<Home />} />
         
          <Route path="/login" element={<Login />} />
       </Routes>
    </div>
 );
};



