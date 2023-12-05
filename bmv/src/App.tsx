import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import  Header  from './comps/header';
import Welcome from './comps/welcome';
import Intro from './comps/intro';
import Projects from './comps/projects';
function App() {
  return (
    <>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;500&display=swap');
      </style>
      <script src="https://kit.fontawesome.com/1a0fbdd901.js" crossOrigin="anonymous" defer></script>
      <Header></Header>
      <main className='main'>
        <Welcome></Welcome>
        <Intro></Intro>
        <Projects></Projects>
      </main>
    </>
  );
}

export default App;
