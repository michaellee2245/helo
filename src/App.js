import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Nav from './component/Nav/Nav';
import './App.css';
import Routes from './route';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Routes />
        <Route component = {Nav} />
      </div>
    );
  }
}

export default App;
