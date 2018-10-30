import React, { Component } from 'react';
// import logo from './logo.svg';
import Login from './Login';
import './App.css';


class App extends Component {
  constructor(){
    super();

    this.state = {
      logged: false,
      username: ''
    }
  }
  handleLogin = (username, isLoggedIn) => {
    console.log(username, isLoggedIn, ' in handleLogin');

  }
  render() {
    return (
      <div className="App">
      <Login handleLogin={this.handleLogin} />

      </div>
    );
  }
}

export default App;
