import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import axios from 'axios';

//Actiont Types
const GET_USERS = 'GET_USERS'

//Action Creators
const getUsers = users => {
  return {
    type: GET_USERS,
    payload: users
  }
}


//Thunk Creators
//I think this is how it works - double check
const fetchUsers = dispatch => {
  return function(){
    axios.get('/api/users')
    .then(users => dispatch(getUsers(users)))
  }
}

//Initial State
const initialState = {};

//State
const reducer = (state = initialState, action) => {
  switch(action.type){
    default: 
      return state;
  }
}

export default createStore(reducer, applyMiddleware(thunk, logger));