import { Fragment, useState } from 'react'
import {BrowserRouter,Routes,Route}from 'react-router-dom'
import './App.css'
import  Home  from './components/Home';
import About from './components/About';
import Contact from './components/contact';
import Notfound from './components/Notfound';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes> 
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/> 
      <Route path='/contact' element={<Contact/>}/>
      <Route path='*' element={<Notfound/>}/>

      </Routes>
      
      </BrowserRouter>
    </>
    
  );
}

export default App
