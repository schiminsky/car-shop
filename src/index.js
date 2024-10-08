import React from 'react';
import ReactDOM from 'react-dom/client';
import Banner from './banner/index';
import Contato from './contato/index';
import Footer from './footer/index';
import Header from './header/index';
import Portifolio from './portifolio/index';
import QuemSomos from './quem somos/index';
import RedesSociais from './redes sociais/index';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Banner />
    <QuemSomos />
    <Portifolio />
    <RedesSociais />
    <Contato />
    <Footer />
  </React.StrictMode>
);
