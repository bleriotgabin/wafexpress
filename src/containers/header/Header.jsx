import React from 'react'
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png'

function Header() {
  return (
    <div className="wafexpress__header section__padding" id='home'>
        <div className="wafexpress__header-content">
           <h1 className="gradient__text">Leadeur de l'éxpédition de colis du Cameroun vers l'union européene</h1>
           <p>Nous sommes une agence d'envoi de colis du Cameroun vers l'union européene
             et exerçons notre activité depuis 3 ans déjà, années durant lesquelles nous
              avons pu apprendre de nos erreurs et avons pu construire une base solide pour mieux vous servir.
              Doté d'un service fiable, rapide et grace á ses partenaires wafexpress est la solution á tous vos problèmes d'envoi de colis
              par voi aérienne et voi maritime.

           </p>

           <div className='wafexpress__header-content__input'>

             <input type='email' placeholder='Votre Adresse Email'/>
             <button type='button' >Get started</button>

           </div>

           <div className='wafexpress__header-content__people'>
              <img src={people} alt="Personne qui ont fait confiance á wafexpress pour l'envoi de colis á partir du Cameroun"/>
              <p>plus de 1600 Personnes envoient des colis chez nous á partir du Cameroun</p>
           </div>

        </div>

        <div className='wafexpress__header-image'>
              <img src={ai} alt="Illustration envoi de colis entre le Cameroun et l'italie"/>
           </div> 
    </div>
  )
}

export default Header;