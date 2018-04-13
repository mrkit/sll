import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header.jsx';
import Main from './Main.jsx';
import Footer from './Footer.jsx';
import Admin from './pages/Admin/Admin.jsx';
import '../../public/stylesheets/main.scss';

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

export default App;