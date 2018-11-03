import React, { Component } from 'react';

import Auth from './component/Auth/Auth';
import Dashboard from './component/Dashboard/Dashboard';
import Form from './component/Form/Form';
import Post from './component/Post/Post';
import Nav from './component/Nav/Nav';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Auth />
        <Dashboard />
        <Form />
        <Post />
        <Nav />
      </div>
    );
  }
}

export default App;
