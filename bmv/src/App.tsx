import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import  Header  from './comps/header';
import Footer from './comps/footer';
import Menu from "./comps/menu"
import Main from "./pages/main";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Test from './pages/test';
function App() {
  const [menuOpen, setMenu] = useState(false);
  return (
    <>
      <BrowserRouter>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;500&display=swap');
        </style>
        <script src="https://kit.fontawesome.com/1a0fbdd901.js" crossOrigin="anonymous" defer></script>
        <Header setMenu = {setMenu}></Header>
        <Menu menuOpen={menuOpen} setMenu={setMenu}></Menu>
        <main className='main'>
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/test' element={<Test></Test>}/>
          </Routes>
          
          
        </main>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
