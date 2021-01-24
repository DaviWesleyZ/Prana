import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Button from './Button';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
  
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
  
    const showButton = () => {
      if (window.innerWidth <= 960) {
        setButton(false);
      } else {
        setButton(true);
      }
    };
  
    useEffect(() => {
      showButton();
    }, []);
    if (typeof window !== "undefined") {
      window.addEventListener('resize', showButton);
    }
    

    return (
      <>
      <nav className='navbar'>
        <div className='navbar-container'>
        <Link href='/' className='navbar-logo' onClick={closeMobileMenu}>
            TRVL
          </Link>          
          <div className='menu-icon' onClick={handleClick}>
          </div>
          <ul className='nav-menu'>
            <li className='nav-item'>
              <Link href='/' className='nav-links' onClick={closeMobileMenu}>Home</Link>
            </li>
            <li className='nav-item'>
              <Link href='/edicoes' className='nav-links' onClick={closeMobileMenu}>Edições</Link>
            </li>
            <li className='nav-item'>
              <Link href='/empresa' className='nav-links' onClick={closeMobileMenu}>A Empresa</Link>
            </li>      
            <li className='nav-item'>
              <Link href='/entrar' className='nav-links-mobile' onClick={closeMobileMenu}>Entrar</Link>
            </li>                       
          </ul>
            {button && <Button buttonStyle='btn--outline'>ENTRAR</Button>}
          </div>
        </nav>
      </>
    );
  }
  
  export default Navbar;
  