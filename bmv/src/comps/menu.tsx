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
            <li><a className='menu__link'>Home</a></li>
            <li><a className='menu__link'>Projecten</a></li>
            <li><a className='menu__link'>Organisatie</a></li>
            <li><a className='menu__link'>Contact</a></li>
        </ul>
    </section>
  );
}

export default Menu;
