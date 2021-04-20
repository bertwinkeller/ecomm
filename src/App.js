import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component.jsx';
import Header from './components/header/header.component.jsx';
import Authenticate from './pages/authenticate/authenticate.component'
import { auth } from './firebase/firebase.utils'

class App extends Component {

  constructor(){
    super()

    this.state={
      currentUser: null
    }
  }

  unsubscribeFromAuth = null  

  componentDidMount(){
  this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user})
      
    })
  }

  componentWilUnmount(){
    this.unsubscribeFromAuth()
  }

  render(){
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={Authenticate} />

      </Switch>
    </div>
  );
  }
}

export default App;
