import React from 'react';

import { Brand, CTA, Navbar, SupportEngine } from './components';
import { Blog, Features, Footer, Header, Possibility, Whatwafexpress } from './containers';
import './App.css';

const App = () => (
  <div className="App">

    <div className="gradient__bg">

      <Navbar />
      <Header />

    </div>

    <Brand />
    <Whatwafexpress />
    <Features />
    <Possibility />
    <CTA />
    <Blog />
    <SupportEngine />
    <Footer />

  </div>
);

export default App;
