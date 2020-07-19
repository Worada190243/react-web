import React from 'react';
import {Route} from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import Home from './components/Hom';
import About from './components/About';
import Footer from './components/Footer';
import Contact from './components/Contact';
import profile from './components/profile';

function App() {
  return (
    <div className="App">
      <Header/>
      <Route exact={true} path='/' component = {Home} />
      <Route path='/about'component={About} />
      <Route path='/Contact'component={Contact} />
      <Route path='/profile'component={profile} />
      <Footer/>
    </div>
  );
}

export default App;
