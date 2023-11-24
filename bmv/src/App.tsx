import React from 'react';
import logo from './logo.svg';
import './App.css';
import Logo from './img/logo-gemeente-amsterdam.png'
function App() {
  return (
    <>
      <header className='header'>
        <img src={Logo} alt="img not found" className='header__image' />
        <p className='header__text'>Menu</p>
      </header>
      <main className='main'>
        <section className='welcome'>
          <article className='text'>
            <h1 className='welcome__title'>
              Bouwmanagement en <br></br>Maatschappelijk Vastgoed
            </h1>
          </article>
        
        </section>
        <section className='intro'></section>
      </main>
    </>
  );
}

export default App;
