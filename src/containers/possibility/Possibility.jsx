import React from 'react';
import possibilityImage from '../../assets/possibility.jpg';
import './possibility.css';

const Possibility = () => (
  <div className="wafexpress__possibility section__padding" id="possibility">
    <div className="wafexpress__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="wafexpress__possibility-content">
      <h4>Wafexpress Livraison et Enlévement de vos Colis á Domicile dans les villes de Doula et Yaoundé </h4>
      <h1 className="gradient__text">Fiabilité, rapidité, satisfaction. <br /> Wafexpress plus prés de vous</h1>
      <p> plus besoin de wait quelqu'un qui go au Bled, Wafexpress Bock tes valise ou tes Kg et  te permet de nang no stress</p>
      <h4>Expédition de colis entre le Cameroun et l'union européene</h4>
    </div>
  </div>
);

export default Possibility;