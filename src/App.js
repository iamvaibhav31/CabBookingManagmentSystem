import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Driver from './Pages/Driver'
import Rider from './Pages/Rider'
import Home from './Pages/Home'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/drive' element={<Driver />} />
        <Route exact path='/rider' element={<Rider />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
