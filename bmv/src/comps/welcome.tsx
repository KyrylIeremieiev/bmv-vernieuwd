import { useState, useEffect } from 'react';
import am from "../img/am.webp"
function Welcome() {
  
  return (
    <section className='welcome'>
      <img src={am} className='welcome__img' loading='lazy' alt='banner of the website. Just a pretty img'></img>
          <article className='text'>
            <h1 className='welcome__title'>
              Bouwmanagement <br></br>
              en <br></br>
              Maatschappelijk <br></br>
              Vastgoed
            </h1>
          </article>

    </section>
  );
}

export default Welcome;
