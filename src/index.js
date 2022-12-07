import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import SupportAdmin from './components/SupportAdmin';

const path = window.location.pathname;

ReactDOM.render(
  <React.StrictMode>
    { path.indexOf('/support') === -1 ? <App /> : <SupportAdmin /> }
  </React.StrictMode>,
  document.getElementById('root'),
);

/* ReactDOM.render(
  <App />, document.getElementById('root')
  ); */
