import React from 'react';
import './brand.css';
import{ dhl,amazon,wafexpress,alibaba,hermes} from './import';

const Brand = () => {
  return (
    <div className='wafexpress__brand section__padding'>
        <div>
          <img src={dhl} alt="Logo de Dhl express, partenaire pour l'expédition de colis du Cameroun vers l'italie ou tout autre pays de l'union européene"/>
        </div>
        <div>
          <img src={amazon} alt="Logo de Amazon, avec wafexpress acheter sur Amazon depuis le Cameroun"/>
        </div>
        <div>
          <img src={wafexpress} alt="logo de wafexpress, leadeur de l'envoi de colis express au Cameroun"/>
        </div>
        <div>
          <img src={alibaba} alt="logo alibaba, partenaire pour acheter en chine depuis le Cameroun"/>
        </div>
        <div>
          <img src={hermes} alt="partenaire pour l'expétion rapide et efficace de vos e commerce á Douala"/>
        </div>
    </div>
  )
}

export default Brand;