import { useState, useEffect } from 'react';
function Footer() {
    
  return (
    <footer className={`footer`} id='contact'>
        <ul className='footer__content'>
            <li className='footer__item'>
                <h3 className='footer__title'>Mail</h3>
                <p className='footer__text'>PMB is bereikbaar op werkdagen tussen 8.30 - 17.30 uur.</p>
                <p className='footer__text'>{"> Contact"}</p>
            </li>
            <li className='footer__item'>
                <h3 className='footer__title'>Volg het ProjectManagement Bureau</h3>
                <p className='footer__text'>{"> LinkedIn"}</p>
                <p className='footer__text'>{"> Twitter"}</p>
            </li>
            <li className='footer__item'>
                <h3 className='footer__title'>Over deze site</h3>
                <p className='footer__text'>{"> Colofon"}</p>
                <p className='footer__text'>{"> Proclaimer en Copyright"}</p>
                <p className='footer__text'>{"> Sitemap"}</p>
            </li>
            <li className='footer__item'>
                <h3 className='footer__title'>Amsterdam.nl</h3>
                <p className='footer__text'>Nieuws en publieksinformatie van de gemeente Amsterdam vindt u op amsterdam.nl</p>
                <p className='footer__text'>{"> Naar amsterdam.nl"}</p>
            </li>
        </ul>
    </footer>
  );
}

export default Footer;
