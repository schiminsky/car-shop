import React, { useEffect, useState } from 'react';
import './styles.scss';

function Header() {
  const [isShrunk, setIsShrunk] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsShrunk(true);
      } else {
        setIsShrunk(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className={`header ${isShrunk ? 'shrink' : ''}`}>
        <div className='menus'>
          <ul className='menu'>
            <li className='link'>
              <a href="#quem-somos">Quem Somos</a>
            </li>
            <li className='link'>
              <a href="#portifolio">Portfólio</a>
            </li>
            <li className='link'>
              <a href="#redes-sociais">Redes Sociais</a>
            </li>
            <li className='link'>
              <a href="#contato">Contato</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
