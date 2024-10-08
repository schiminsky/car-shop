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
    <div className={`header ${isShrunk ? 'shrink' : ''}`}>
      <div className='menus'>
        <ul className='menu'>
          <li className='link'>Quem Somos</li>
          <li className='link'>Portfólio</li>
          <li className='link'>Redes Sociais</li>
          <li className='link'>Contato</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
