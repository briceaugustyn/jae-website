import React, { Component } from 'react';
import './index.css';
import Header from './components/header';
import Welcome from './components/welcome';
import Special from './components/special';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Welcome />
        <Special />
      </div>
    );
  }
}
export default App;