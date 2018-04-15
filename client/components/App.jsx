import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import '../main.scss';
import store from '../store';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Admin from './pages/Admin/Admin';

const App = () => (
  <Switch>
    <Route exact path='/admin' component={Admin} />
    <Route path='/' render={() => (
      <div id='container'>
        <Header />
        <Main />
        <Footer />
      </div>
      )} />
  </Switch>
)

render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root')
)