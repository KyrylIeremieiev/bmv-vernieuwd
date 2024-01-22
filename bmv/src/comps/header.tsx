import { useState, useEffect } from 'react';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logo from '../img/logo-gemeente-amsterdam.webp'
function Header({setMenu}:any) {
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
    <header className={`header ${scrollPosition > 60 ? 'scrolled' : ''}`}>
        <img src={Logo} alt="img not found" className='header__image' loading='lazy'/>
        <p className='header__text base__menuBtn'
          onClick={()=>{
            setMenu(true)
            console.log('open sesami')
          }}
        >
          <FontAwesomeIcon icon={faBars} />
        </p>
      </header>
  );
}

export default Header;
