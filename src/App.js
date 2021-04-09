import React from 'react';
import {Switch, Route} from 'react-router-dom'

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignPage from './pages/signpage/sign.component';
import Header from './components/header/header.component';

import {auth} from './firebase/firebase.util'

class App extends React.Component{

    constructor(){
      super();

      this.state = {
        currentUser: null
      }
    }

    unsubscribeFromAuth = null
    
    componentDidMount(){
      this.unsubscribeFromAuth =  auth.onAuthStateChanged(user => {
                                      this.setState({currentUser: user});
                                    })
    }

    componentWillUnmount(){
      this.unsubscribeFromAuth();
    }

  render(){
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage}/>        
          <Route exact path='/shop' component={ShopPage}/>        
          <Route exact path='/signin' component={SignPage}/>
        </Switch>
      </div>
    );
  }
}

export default App;
