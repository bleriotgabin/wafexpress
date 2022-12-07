import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Acheter sur Amazon étant au Cameroun', 
    text: 'Vous voulez acheter un article sur amazon? Avec wafexpress regarder vos articles sur le site officiel de Amazon, envoyez nous le lien ou une description de vos besoins et faites vous livrez dans de bref délais',
  },
  {
    title: 'Acheter sur Shein étant au Cameroun',
    text: ' Shein est aujourdjui une des boutiques en ligne les plus utilisé pour acheter des vêtements et accesoires. Wafexpress vous offre la possibilité de recevoir vos articles shein au Cameroun dans de bref délais. contactez nous dés aujourdjui et recevez un dévis ',
  },
  {
    title: 'Acheter sur Alibaba étant au Cameroun',
    text: 'Grace á des partenaires fiable Wafexpress vous offre la possibilité de faire des achats en gros ou en détails chez des fournisseurs en chine',
  },
  {
    title: 'Achat de Voitures et Accésoires auto',
    text: 'vous voulez acheter une voiture ou une piéce en Allemagne ou en France? Wafexpress grace á son équipe expérimenté et professionelle se charge de trouver la voiture de vos Rêve et de vous la livrer dans de bref délais. Contactez nous aujourdjui et laissez nous faire le reste pour vous',
  },
];

const Features = () => (
  <div className="wafexpress__features section__padding" id="features">
    <div className="wafexpress__features-heading">
      <h1 className="gradient__text">L'avenir est maintenant et vous avez juste besoin de le réaliser. Entrez dans l'avenir aujourd'hui. & Arangez-vous pour que cela arrive.</h1>
      <p>wafexpress achat en Europe</p>
    </div>
    <div className="wafexpress__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;