import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import './App.css';
import { Container } from './presentation'
import Header from './features/header/Header'
import Home from './pages/Home'
import Footer from './features/footer/Footer'
import Routes from './app/routes/routes'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Container as="div" className="container-fluid" styles='padding: 0;'>
          <Routes />
        </Container>
      </BrowserRouter>
    );
  }
}

export default App;
