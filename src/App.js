import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import { Switch, Route, Link } from 'react-router-dom';


const HatsPage = (props) => {
  console.log(props)
  return (
    <div>
      <Link to='/'>HOME</Link>
      <h1>Hats page</h1>
   </div>
  )
}


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={ HomePage }/>
        <Route  path='/hats' component={ HatsPage }/>
      </Switch>
    </div>
  );
}

export default App;
