import React from 'react';
import InstagramFeed from 'react-instagram-feed';

const RedesSociais = () => {
  return (
    <section id="redes-sociais" className="section">
      <InstagramFeed
        userId="YOUR_USER_ID" // Substitua pelo seu user ID
        accessToken="YOUR_ACCESS_TOKEN" // Substitua pelo seu token de acesso
        className="instagram-feed"
        limit={6} // Número de postagens a exibir
      />
    </section>
  );
};

export default RedesSociais;
