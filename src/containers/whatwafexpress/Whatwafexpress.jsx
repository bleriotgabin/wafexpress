import React from 'react'
import './whatwafexpress.css';
import {Feature} from '../../components'
function Whatwafexpress() {
  return (
    <div className='wafexpress__what section__margin' id='whatwafexpress'>

        <div className='wafexpress__what-feature'>
            <Feature title="Nos Services?" text="Nous sommes spécialisé dans l'expédtion de colis et courier 
              depuis le Cameroun vers des Pays tel que Italie, France, Espagne, Allemagne,... Que vous soyez
               une entreprise ou un particulier, profitez de nos offres exceptionnels et un service de qualité.
               " />
        </div>

        <div className='wafexpress__what-heading'>
             <h1 className='gradient__text'>Vous satisfaire, notre Priorité.</h1>
             <p>Wafexpress au-delà des frontières</p>
        </div>

        <div className='wafexpress__what-container'>
             <Feature title="Envoi express" text="Notre Service d'envoi express du Cameroun vers l'union Européene est  
              ouvert du Lundi au Vendredi avec départ iminant tout les jours. La durée de Livraison étant de 3 Jours ouvrable. envoiyé un colis express"/>
             <Feature title="Mokolo alimentaire" text=" Notre Service Mokolo Alimentaire vous permet d'envoyer et recevoir des Vivres Alimentaires á des Prix défiant toute concurance. La durée de Livraison étant de 3-5 Jours ouvrable. départ tout les Mercredi et dépot de colis obligatoire le mardi soir. envoiyé un colis Alimentaire"/>
             <Feature title="Envoi Basic" text="Le Service envoi Basic vous permet d'envoyer vos colis et Lettres sous un délais de 3-5 Jours ouvrable. ce Service n'a pas de date fixe, Cliquez ici pour voir les dates et tarifs actuel"/>
        </div>
    </div>
  )
}

export default Whatwafexpress;

