import React from 'react';
import ReactDOM from 'react-dom/client';
import Banner from './banner/index';
import Header from './header/index';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Banner />
  </React.StrictMode>
);
