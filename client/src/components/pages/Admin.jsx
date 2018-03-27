import React, { Component, Fragment } from 'react';

class Admin extends Component {
  state = {}
  
  handleSubmit = event => {
    event.preventDefault();
    
    
  }
  
  render(){
    return (
      <Fragment>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="username" placeholder="Login" autoFocus/>
          <input type="password" name="password"/>
          <button>Login</button>
        </form>
      </Fragment>
    )
  }
}

export default Admin;