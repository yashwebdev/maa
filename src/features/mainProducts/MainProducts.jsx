import React from 'react'
import { Column, StackableRow, Container } from '../../presentation'
import b1 from '../../resources/pattern/country-quilt-dark.png'
import p1 from '../../resources/Berries Trail Mix.png'
import p2 from '../../resources/Healthy Seed Mix 3.jpeg'
import p3 from '../../resources/Roasted Cashews.png'
import p4 from '../../resources/Besan Ladoo with Front.png'
import p5 from '../../resources/Tea Infuser Sticks.jpeg'

function MainProducts() {
    const productCardContainerOuter = `
    background-color: #f9f9f9;

      h3 {
        width: max-content;
        background-color:#f9f9f9; 
        color: #000;
        padding: 10px 20px 15px 20px; 
        margin-top: -70px; 
        margin-left: -20px
        @media (min-width: 576px) { 
           
          }    
      }
    `
    const productCardContainer = `
    margin-left: -10px;
`
    const productCardStyle = `
        width: 100%;
        margin: 10px;
        background-color: #fff;
        box-shadow: 0px 1px 4px rgba(222, 181, 70,0.9);
        border: 1px solid #deb546;
        border-bottom: none;
        cursor: pointer;

        
        @media (min-width: 576px) { 
        width: calc(50% - 20px);
      }

      @media (min-width: 768px) {
        width: calc(33.3% - 20px);
       }

       @media (min-width: 992px) {
        width: calc(25% - 20px);
       }

        &:hover .productDesc {
           color: #fff;
        }
        .productImage img {
            display: block;
            margin: auto;
            max-width: 100%;
            height: 250px;
            border-top-left-radius: 5px;
            border-top-right-radius: 5px;
        }

        .productDesc {
            padding: 10px;
            background-color: #deb546;
            a {
                font-family: 'Oswald', sans-serif;
                margin: 0;
                text-align: center;
                font-size: 1.2em;
                cursor: pointer;
                display: block;
                width: 100%;
            }
        }
    `
    return (
        <StackableRow smallPadded styles={productCardContainerOuter}>
            <Column className="col-sm-12">
                <Container moduleHeading as="h3">OUR PRODUCTS</Container>
                <Container as="p" styles='color: #000; padding: 20px 0;'>MAA is committed to reviving the most endearing relationship of a mother with his child and mingling it with the gifts from Mother Nature. MAA brings to you the colours of benignity and affection added to the flavours of authentic homemade savouries</Container>
            </Column>
            <Column className="col-sm-12" styles={productCardContainer}>
                <Container as="div" styles={productCardStyle}>
                    <Container className="productImage">
                        <Container as="img" src={p1}></Container>
                    </Container>
                    <Container className="productDesc">
                        <Container as="a">Binge Savouries</Container>
                    </Container>
                </Container>
                <Container as="div" styles={productCardStyle}>
                    <Container className="productImage">
                        <Container as="img" src={p2}></Container>
                    </Container>
                    <Container className="productDesc">
                        <Container as="a">Nuts & Seeds</Container>
                    </Container>
                </Container>
                <Container as="div" styles={productCardStyle}>
                    <Container className="productImage">
                        <Container as="img" src={p3}></Container>
                    </Container>
                    <Container className="productDesc">
                        <Container as="a">Organic dry fruits</Container>
                    </Container>
                </Container>
                <Container as="div" styles={productCardStyle}>
                    <Container className="productImage">
                        <Container as="img" src={p4}></Container>
                    </Container>
                    <Container className="productDesc">
                        <Container as="a">Besan ladoo</Container>
                    </Container>
                </Container>
                <Container as="div" styles={productCardStyle}>
                    <Container className="productImage">
                        <Container as="img" src={p1}></Container>
                    </Container>
                    <Container className="productDesc">
                        <Container as="a">Organic honey</Container>
                    </Container>
                </Container>
                <Container as="div" styles={productCardStyle}>
                    <Container className="productImage">
                        <Container as="img" src={p2}></Container>
                    </Container>
                    <Container className="productDesc">
                        <Container as="a">Organic apply cider vinegar</Container>
                    </Container>
                </Container>
                <Container as="div" styles={productCardStyle}>
                    <Container className="productImage">
                        <Container as="img" src={p5}></Container>
                    </Container>
                    <Container className="productDesc">
                        <Container as="a">Tea sticks</Container>
                    </Container>
                </Container>
                <Container as="div" styles={productCardStyle}>
                    <Container className="productImage">
                        <Container as="img" src={p4}></Container>
                    </Container>
                    <Container className="productDesc">
                        <Container as="a">Organic saffron</Container>
                    </Container>
                </Container>
            </Column>
        </StackableRow>
    )
}

export default MainProducts
