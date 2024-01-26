import { useState, useEffect } from 'react';
function Footer() {
    
  return (
    <footer className={`footer`} id='contact'>
        <ul className='footer__content'>
            <li className='footer__item'>
                <h3 className='footer__title'>Mail</h3>
                <p className='footer__text'>PMB is bereikbaar op werkdagen tussen 8.30 - 17.30 uur.</p>
                <a href="https://www.amsterdam.nl/pmb/contact/"className='footer__text footer__link'>{"> Contact"}</a>
            </li>
            <li className='footer__item'>
                <h3 className='footer__title'>Volg het Project Management Bureau</h3>
                <a href="http://www.linkedin.com/company/projectmanagement-bureau"className='footer__text footer__link'>{"> LinkedIn"}</a>
            </li>
            <li className='footer__item'>
                <h3 className='footer__title'>Over deze site</h3>
                <a href="https://www.amsterdam.nl/pmb/algemene-onderdelen/colofon/"className='footer__text footer__link'>{"> Colofon"}</a>
                <a href="https://www.amsterdam.nl/pmb/algemene-onderdelen/proclaimer-copyright/"className='footer__text footer__link'>{"> Proclaimer en Copyright"}</a>
                <a href="https://www.amsterdam.nl/pmb/algemene-onderdelen/sitemap/"className='footer__text footer__link'>{"> Sitemap"}</a>
            </li>
            <li className='footer__item'>
                <h3 className='footer__title'>Amsterdam.nl</h3>
                <p className='footer__text'>Nieuws en publieksinformatie van de gemeente Amsterdam vindt u op amsterdam.nl</p>
                <a href="https://www.amsterdam.nl/"className='footer__text footer__link'>{"> Naar amsterdam.nl"}</a>
            </li>
        </ul>
    </footer>
  );
}

export default Footer;
