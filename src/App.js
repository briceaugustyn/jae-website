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
import Test from './components/test1';
import Feedback2 from './components/feedback2';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Welcome />
        <Feedback2 />
        {/* <Shoecase /> */}
        <News />
        <Audit />
        {/* <Training /> */}
        <Test />
        <Contact /> 
        <Footer />
      </div>
    );
  }
}
export default App;