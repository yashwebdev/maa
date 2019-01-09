import React, { Component } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import './App.css';
import Header from './features/header/Header'
import Slider from './features/slider/Slider'
import About from './features/about/About'
import MainProducts from './features/mainProducts/MainProducts'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Slider />
        <About />
        <MainProducts />
      </React.Fragment>
    );
  }
}

export default App;
