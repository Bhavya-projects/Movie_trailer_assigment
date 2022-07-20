import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Movietrailer from './components/Movietrailer';
import Previewmovie from './components/Previewmovie';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Movietrailer />}/>
      <Route path="preview" element={<Previewmovie />}/>
    </Routes>
  );
}

export default App;
