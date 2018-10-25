import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Main from './components/Main';
import Projects from './components/Projects';
import Resume from './components/Resume';
import SocialLinks from './components/SocialLinks'


import './App.css';
import ContactMe from './components/ContactMe';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Home />
        <Main />
        <Projects />
        <ContactMe />
        <Resume />
        <SocialLinks />
      </div>
    );
  }
}

export default App;


