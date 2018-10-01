import React, { Component } from 'react';
import './index.css';
import Header from './components/header';
import Welcome from './components/welcome';
import Special from './components/special';
import Feature from './components/feature';
import Shoecase from './components/shoecase';
import Subscribe from './components/subscribe';
import Screenshot from './components/screenshot';
import Video from './components/video';
import Feedback from './components/feedback';
import Contact from './components/contact';
import News from './components/news';
import Footer from './components/footer';
import Audit from './components/audit';
import Training from './components/training';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Welcome />
        {/* <Special /> */}
        <Shoecase />
        <News />
        <Audit />
        <Training />
        {/* <Special />
        <Feature />
        <Shoecase />
        <Subscribe />
        <Screenshot />
        <Video />
        <Feedback /> */}
        <Contact />
        {/* <News /> */}
        <Footer />
      </div>
    );
  }
}
export default App;