import React, { Component } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import './App.css';
import {Container} from './presentation'
import Header from './features/header/Header'
import Slider from './features/slider/Slider'
import About from './features/about/About'
import MainProducts from './features/mainProducts/MainProducts'
import Brief from './features/brief/Brief'
import VisionMission from './features/visionMission/VisionMission'
import Footer from './features/footer/Footer'
import SpecialMessage from './features/specialMessage/SpecialMessage'
import fruits from './resources/backImages/fruits.jpg'

class App extends Component {
  render() {
    return (
      <Container as="div" className="container-fluid" styles='padding: 0;'>
        <Header />
        <Slider />
        <MainProducts />
        <Brief />
        <VisionMission />
        <Footer />
      </Container>
    );
  }
}

export default App;
