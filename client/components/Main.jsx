import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import axios from 'axios';

class Main extends Component {
  
  componentWillMount(){
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