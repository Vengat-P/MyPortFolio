import React from 'react';
import Navbar from './Components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import PageNotFound from './Pages/PageNotFound';
import Projects from './Pages/Projects';
import Footer from './Components/Footer';

const App = () => {
  return (
    <>
    <div>
      <Navbar/>
    </div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/skills' element={<About/>}/>
        <Route path='*' element={<PageNotFound/>}/>
        <Route path='/projects' element={<Projects/>}/>
      </Routes>
      <div>
        <Footer/>
      </div>
    </>
  );
};

export default App;