import React, { Component } from 'react';
import './index.css';
import Header from './components/header';
import Welcome from './components/welcome';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Welcome />
      </div>
    );
  }
}
export default App;