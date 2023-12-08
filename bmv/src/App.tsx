import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import  Header  from './comps/header';
import Welcome from './comps/welcome';
import Intro from './comps/intro';
import Projects from './comps/projects';
import Org from './comps/org';
import Menu from './comps/menu';
function App() {
  const [menuOpen, setMenu] = useState(false);
  return (
    <>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;500&display=swap');
      </style>
      <script src="https://kit.fontawesome.com/1a0fbdd901.js" crossOrigin="anonymous" defer></script>
      <Header setMenu = {setMenu}></Header>
      <Menu menuOpen={menuOpen} setMenu={setMenu}></Menu>
      <main className='main'>
        <Welcome></Welcome>
        <Intro></Intro>
        <Projects></Projects>
        <Org></Org>
      </main>
    </>
  );
}

export default App;
