import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage.component.js';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component'
import SignInSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up.component'

function App() {
  return (
    <div>
      <Header />
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/shop' component={ShopPage}/>       
          <Route exact path='/sign-in' component={SignInSignUpPage}/>       
        </Switch>
    </div>
  );
}

export default App;
