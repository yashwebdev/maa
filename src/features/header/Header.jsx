import React from 'react'
import {Column, StackableRow, Container} from '../../presentation'

function Header() {
  const headerStyle=`
    background-color: #000;
    z-index: 10;
    position: fixed;
    top:0;
    left: 0;
    right: 0;
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
      font-size: 0.8em;
      display: block;
      margin-bottom: 10px;
      text-align: center;

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
            <Container as="h3">Maa</Container>
          </Column>
          <Column hRight className="col-sm-7">
            <Container as="nav">
                <Container as="a">About Us</Container>
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
