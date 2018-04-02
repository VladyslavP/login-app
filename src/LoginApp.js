import React, { Component } from 'react';

import LoginComponent from './components/LoginComponent';
import './LoginApp.css';

class LoginApp extends Component {
  render() {
    return (
      <div className="App">
          <LoginComponent/>
      </div>
    );
  }
}

export default LoginApp;
