import React from 'react';
import Header from './components/header-component/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInUp from './pages/sign-in-up/sign-in-up.component';
import { Switch, Route} from 'react-router-dom';
import { auth } from './firebase/firebase.utils';
import './App.css';


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser : null
    }
  }
 
  unSubscribeFromAuth = null
  // being aware of signIn vs signOut
  componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged( user => {
      // open subscription
      this.setState({ currentUser : user });

      console.log(user);
    });
  }
   // handle logouts
  // prevents memory leaks
  componentWillUnmount () {
    this.unSubscribeFromAuth();
  }

  render () {
    return (
      <div className="App">
        <Header currentUser = {this.state.currentUser} /> 
        <Switch>
          <Route exact path='/' component={ HomePage }/>
          <Route  path='/shop' component={ ShopPage }/>
          <Route  path='/signin' component={ SignInUp }/>
        </Switch>
      </div>
    );
  }
}

export default App;
