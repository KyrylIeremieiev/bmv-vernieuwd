import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
function Menu({menuOpen, setMenu}:any) {
  console.log(menuOpen)
  return (
    <section className={`menu ${menuOpen === true ? "open" : ""}`}>
        <p className='header__text menu__close'
            onClick={()=>{
                setMenu(false)
            }}
        >
          <FontAwesomeIcon icon={faX} />
        </p>
        <ul className='menu__links'>
            <li><a className='menu__link' href='http://localhost:3000/'>Home</a></li>
            <li><a className='menu__link' href='http://localhost:3000/#projecten'>Projecten</a></li>
            <li><a className='menu__link' href='http://localhost:3000/#org'>Organisatie</a></li>
            <li><a className='menu__link' href='#contact'>Contact</a></li>
        </ul>
    </section>
  );
}

export default Menu;
