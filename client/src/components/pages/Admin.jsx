import React, { Component, Fragment } from 'react';
import axios from 'axios';

class Admin extends Component {
  state = {
    username: '',
    password: '',
    loggedIn: false
  }
  
  componentDidMount(){
    console.log('Logged in = ', this.state.loggedIn);
    if(localStorage.bizken){
      this.setState({ loggedIn: true });
    }
  }
  
  handleChange = event => {
    switch(event.target.name){
      case 'username':
        return this.setState({ username: event.target.value });
      case 'password':
        return this.setState({ password: event.target.value });
      default:
        return;
    }
    console.log('State in the change handler', this.state.username, this.state.password)
  }
  
  handleSubmit = event => {
    event.preventDefault();
    const { username, password } = event.target;
    
    axios.post('/api/auth', {username: username.value, password: password.value})
    .then(res => res.data)
    .then(token => localStorage.setItem('bizken', token))
    .then(() => {
      if(localStorage.bizken){
        this.setState({ loggedIn: true });
      }
    })
    .catch(err => console.log('Error message =', err.message));
    
    username.value = '';
    password.value = '';
  }
  
  handleLogout = event => {
    localStorage.removeItem('bizken');
    this.setState({ loggedIn: false });
  }
  
  render(){
    return (
      this.state.loggedIn ? 
      <Fragment>
        You made it!
        <button onClick={this.handleLogout}>Log Out</button>      
      </Fragment>
      :
      <Fragment>
        <form id="login" onSubmit={this.handleSubmit}>
          <input type="text" name="username" placeholder="Login" autoFocus onChange={this.handleChange} value={this.state.username}/>
          <input type="password" name="password" placeholder="Password" onChange={this.handleChange}value={this.state.password} />
          <button>Login</button>
        </form>
      </Fragment>
    )
  }
}

export default Admin;