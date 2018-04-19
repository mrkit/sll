import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { Switch, Route, Link } from 'react-router-dom';

class Dashboard extends Component {
  state = {}
  
  render(){
    return (
      <div className="admin">
        <header>
          <h1>Dashboard</h1>
        </header>
        <aside>
          <ul>
            <li><Link to='/admin/pages'>Pages</Link></li>
            <li><Link to='/admin/posts'>Posts</Link></li>
          </ul>
        </aside>  
        <main>
          <Switch>
            <Route path='/admin' render={()=> <div>Admin</div>} />
            <Route path='/admin/posts' render={() => <div>POSTS</div>} />
            <Route path='/admin/pages' render={() => <div>Pages</div>} />
          </Switch>
        </main>
        <footer>
          
        </footer>
        
      </div>
    )
  }
}

export default Dashboard;