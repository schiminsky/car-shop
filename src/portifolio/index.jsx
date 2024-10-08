import './styles.scss';

function Portifolio () {
  return (
    <section id="portifolio" className='portifolio'>
      <h1>Portifolio</h1>
      <div className='portifolio-container'>
        <img src='https://via.placeholder.com/800x500?text=Portifolio 1' alt="Portifolio"/>
        <div className='text'>
          <h2>
            Lorem ipsum
          </h2>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id condimentum dolor. Praesent consectetur tincidunt velit maximus egestas.
          </p>
        </div>
      </div>
      <div className='portifolio-container port-right'>
        <img src='https://via.placeholder.com/800x500?text=Portifolio 2' alt="Portifolio"/>
        <div className='text'>
          <h2>
            Lorem ipsum
          </h2>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id condimentum dolor. Praesent consectetur tincidunt velit maximus egestas.
          </p>
        </div>
      </div>
      <div className='portifolio-container'>
        <img src='https://via.placeholder.com/800x500?text=Portifolio 3' alt="Portifolio"/>
        <div className='text'>
          <h2>
            Lorem ipsum
          </h2>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id condimentum dolor. Praesent consectetur tincidunt velit maximus egestas.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Portifolio;