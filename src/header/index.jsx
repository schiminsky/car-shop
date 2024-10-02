import './styles.scss';

function Header() {
  return (
    <div className='header'>
      <div className='menus'>
        <ul className='menu menu-1'>
          <li className='carros'>Carros</li>
          <li className='vans'>Vans</li>
          <li className='motos'>Motos</li>
        </ul>
        <ul className='menu menu-2'>
          <li className='Minha conta'>Minha conta</li>
          <li className='Checkout'>Checkout</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
