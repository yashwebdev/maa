import React from 'react'
import { Column, StackableRow, Container } from '../../presentation'

function Footer() {
    const footerContainer = `
        background-color: #000; 
        color: #fff;
    `

    const navStyle = `
    margin-top: 15px;
    text-align: center;
    line-height: 190%;

    
    a {
        display: inline-block;
        color: #fff !important;
        margin-right: 15px;
        cursor: pointer;
        font-size: 0.8em;
        &:after{
            content: '|';
           margin-left: 15px;
        }

        &:last-child:after{
            content: none;
        }
    }
    `

    const brandIcons = `
        color:#fff;
        font-size: 1.3em;
        margin-right: 20px;
        margin-top: 20px;
        cursor: pointer;
        transition: transform .8s;

        &:hover {
            transform: rotate(360deg)
        }

        &:last-child {
            margin-right: 0;
        }
    `

    return (
        <StackableRow largePadded styles={footerContainer}>
            <Column className="col-sm-12" hCenter dirColumn>
                <Container normalHeading as="h3" styles='color: #fff; text-align: center;'>Maa</Container>
                <Container as="nav" styles={navStyle}>
                    <Container as="a" className="selected">About Us</Container>
                    <Container as="a">Our Products</Container>
                    <Container as="a">Find Us</Container>
                    <Container as="a">News & Testimonials</Container>
                    <Container as="a">Get in Touch</Container>
                </Container>
                <Container as="div">
                    <Container as="i" className="fab fa-facebook-f" styles={brandIcons}></Container>
                    <Container as="i" className="fab fa-twitter" styles={brandIcons}></Container>
                    <Container as="i" className="fab fa-youtube" styles={brandIcons}></Container>
                </Container>
            </Column>
        </StackableRow>
    )
}

export default Footer
