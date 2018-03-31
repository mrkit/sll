import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import axios from 'axios';

class Main extends Component {
  
  componentWillMount(){
    console.log('Hello world, localstorage is =', localStorage);
    if(localStorage.bizken){
      axios.defaults.headers.common.authorization = `Bearer ${localStorage.bizken}`;
    } else {
      delete axios.defaults.headers.common.authorization;
    }
  }
  
  render(){
    return (
      <main>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
        </Switch>
      </main>
    )
  }
}

export default Main;