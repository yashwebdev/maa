import React from 'react'
import { Column, StackableRow, Container } from '../../presentation'

function About() {
    const aboutStyle=`
        background-color: rgba(0,0,0,0.9);
        color:#fff;
        margin-top: 500px;

        
        @media (min-width: 576px) { 
            margin-top: 600px;
          }
    `
    return (
        <StackableRow mediumPadded styles={aboutStyle}>
            <Column className="col-sm-12">
                <Container as="div">
                    <Container moduleHeading as="h3">About Us</Container>
                    <Container as="p">A mother's love is always materialized in food, and there is no love as pure as hers.</Container>
                    <Container as="p">MAA is committed to reviving the most endearing relationship of a mother with his child and mingling it with the gifts from Mother Nature. MAA brings to you the colours of benignity and affection added to the flavours of authentic homemade savouries.</Container>
                </Container>
            </Column>
        </StackableRow>
    )
}

export default About
