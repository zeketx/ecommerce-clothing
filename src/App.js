import React from 'react';
import Header from './components/header-component/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInUp from './pages/sign-in-up/sign-in-up.component';
import { Switch, Route} from 'react-router-dom';

import './App.css';


function App() {
  return (
    <div className="App">
      <Header /> 
      <Switch>
        <Route exact path='/' component={ HomePage }/>
        <Route  path='/shop' component={ ShopPage }/>
        <Route  path='/signin' component={ SignInUp }/>
      </Switch>
    </div>
  );
}

export default App;
