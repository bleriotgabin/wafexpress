import React from 'react';
import gpt3Logo from '../footer/logo.svg';
import './footer.css';

const Footer = () => (
  <div className="wafexpress__footer section__padding" id='footer'>
    <div className="wafexpress__footer-heading">
      <h1 className="gradient__text"> C’est notre chance de faire nos preuves, nous ne vous décevrons pas!</h1>
    </div>

    <div className="wafexpress__footer-btn">
      <p>Envoyer un Colis</p>
    </div>

    <div className="wafexpress__footer-links">
      <div className="wafexpress__footer-links_logo">
        <img src={gpt3Logo} alt="wafexpress_logo" />
        <p>Wafexpress SARL Cameroun, <br /> All Rights Reserved</p>
      </div>
      <div className="wafexpress__footer-links_div">
        <h4>Links</h4>
        
        <p>Social Media</p>
        <p>Galerie</p>
      
      </div>
      <div className="wafexpress__footer-links_div">
        <h4>Wafexpress</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        
      </div>
      <div className="wafexpress__footer-links_div">
        <h4>Get in touch</h4>
        
        <p>0049 176 859 02 716</p>
        <p>info@wafexpress.de</p>
      </div>
    </div>

    <div className="wafexpress__footer-copyright">
      <p>@2022 Wafexpress. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;