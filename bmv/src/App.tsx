import React from 'react';
import logo from './logo.svg';
import './App.css';
import Logo from './img/logo-gemeente-amsterdam.png'
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useEffect } from 'react';
function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const currentPosition = window.scrollY;
    setScrollPosition(currentPosition);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;500&display=swap');
      </style>
      <script src="https://kit.fontawesome.com/1a0fbdd901.js" crossOrigin="anonymous" defer></script>
      <header className={`header ${scrollPosition > 60 ? 'scrolled' : ''}`}>
        <img src={Logo} alt="img not found" className='header__image' />
        <p className='header__text'>
          <FontAwesomeIcon icon={faBars} />
        </p>
      </header>
      <main className='main'>
        <section className='welcome'>
          <article className='text'>
            <h1 className='welcome__title'>
              Bouwmanagement en <br></br>Maatschappelijk Vastgoed
            </h1>
          </article>

        </section>
        <section className='intro'>
          <article className='intro__article'>
            <h2 className='intro__title'>Een sociaal-duurzaam Amsterdam</h2>
            <p className='intro__p'>Voor veel mensen is en blijft Amsterdam een zeer aantrekkelijke plek om te wonen en dus blijven we bouwen aan de groei van de stad. Maar Amsterdam bestaat natuurlijk uit méér dan alleen woningen. Daarom bouwen we aan een sociaal-duurzaam Amsterdam: een stad die het welzijn van haar bewoners belangrijk vindt en verbetert, door niet alleen woningen te bouwen maar ook te zorgen voor maatschappelijke voorzieningen, voor huidige bewoners en toekomstige generaties.</p>
          </article>
        </section>
      </main>
    </>
  );
}

export default App;
