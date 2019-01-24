import React from 'react'
import {Column, StackableRow, Container} from '../../presentation'
import logo from '../../resources/logo.png'

function Header() {
  const headerStyle=`
    background-color: rgba(0,0,0,0.9);
    z-index: 10;
    position: fixed;
    top:0;
    left: 0;
    right: 0;

    img {
      max-height: 70px;
      margin: auto;
      @media (min-width: 576px) { 
        margin-left: 0;
        margin-right: 15px;
      }
    }

    img + p{
      width: 100%;
      text-align:center;
      margin-top: 10px;
      display: block;
      @media (min-width: 576px) { 
        display: inline;
        width: auto;
      }
    }

    h3{
      color: #fff;
      width: 100%;
      text-align: center;
      margin-bottom: 20px;

      @media (min-width: 576px) { 
        text-align: left;
        margin-bottom: 0;
      }
    }

    nav {
      display: none;

      @media (min-width: 576px) { 
        display: block;
        text-align: right;
      }
    }
    nav a{
      color: #fff;
      padding: 10px 20px;
      font-size: 1em;
      letter-spacing: 1px;
      display: block;
      margin-bottom: 10px;
      text-align: center;
      cursor: pointer; 
      border-bottom: 1px solid #deb546;
      &.selected, &:hover {
        background-color: #deb546;
        color:#000;
      }

      &:last-child {
        margin-bottom: 0;
      }

      &:last-child {
        margin-right: -20px;
      }

      @media (min-width: 576px) { 
        display: inline-block;
        margin: 0;
      }
    }
  `
  return (
      <StackableRow smallPadded styles={headerStyle}>
          <Column className="col-sm-5">
            <Container as="img" src={logo}></Container><Container as="p" styles='color: #fff;'>Site is under construction</Container>
          </Column>
          <Column hRight className="col-sm-7">
            <Container as="nav">
                <Container as="a" className="selected">About Us</Container>
                <Container as="a">Our Products</Container>
                <Container as="a">Find Us</Container>
                <Container as="a">News & Testimonials</Container>
                <Container as="a">Get in Touch</Container>
            </Container>
          </Column>
      </StackableRow>
  )
}

export default Header
