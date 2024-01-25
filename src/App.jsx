import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home';
import './App.css'
import Header from './Componentes/Header';

const App = () => {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App