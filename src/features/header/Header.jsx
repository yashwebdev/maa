import React from 'react'
import {Link} from 'react-router-dom';
import {Column, StackableRow, Container} from '../../presentation'
import logo from '../../resources/logo.png'

function getClass(props, value) {
  return props.selected.toUpperCase() === value.toUpperCase() ? 'selected' : '';
}

function Header(props) {
  const headerStyle=`
    background-color:  ${props.fixed ? 'rgba(0,0,0,0.9)' : '#000'};
    z-index: 10;
    position: ${props.fixed ? 'fixed' : 'relative'};
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
      text-decoration: none;
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
      <StackableRow smallPadded styles={headerStyle} alignItems="center">
          <Column className="col-sm-5">
            <Container as="img" src={logo}></Container><Container as="p" styles='color: #fff;'>Site is under construction</Container>
          </Column>
          <Column hRight className="col-sm-7">
            <Container as="nav">
                <Link to='/' className={getClass(props, 'about us')}>About Us</Link>   
                <Link to='/products' className={getClass(props, 'Our Products')}>Our Products</Link>
                <Link to='/products2' className={getClass(props, 'Our Products 2')}>Our Products 2</Link>
                {/* <Link to='/' className={getClass(props, 'Find Us')}>Find Us</Link>
                <Link to='/' className={getClass(props, 'News & Testimonials')}>News & Testimonials</Link>
                <Link to='/' className={getClass(props, 'Get in Touch')}>Get in Touch</Link> */}
            </Container>
          </Column>
      </StackableRow>
  )
}

export default Header
