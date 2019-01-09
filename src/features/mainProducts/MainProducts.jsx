import React from 'react'
import { Column, StackableRow, Container } from '../../presentation'
import b1 from '../../resources/pattern/dark_mosaic.png'
import p1 from '../../resources/Berries Trail Mix.png'
import p2 from '../../resources/Healthy Seed Mix 3.jpeg'
import p3 from '../../resources/Roasted Cashews.png'
import p4 from '../../resources/Besan Ladoo with Front.png'
import p5 from '../../resources/Tea Infuser Sticks.jpeg'

function MainProducts() {
    const productCardContainer = `
    margin-left: -20px;
`
    const productCardStyle = `
        width: calc(25% - 20px);
        margin: 10px;
        background-color: #fff;
        box-shadow: 0px 2px 4px rgba(0,0,0,0.4);
        border-radius: 5px;
        transition: all 0.2s;
        cursor: pointer;
        &:hover {
            box-shadow: 0px 0px 20px rgb(255,255,255);
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

            a {
                margin: 0;
                margin-top: 10px;
                text-align: center;
                font-size: 1em;
                cursor: pointer;
                display: block;
                width: 100%;
            }
        }
    `
  return (
      <StackableRow mediumPadded backImage={b1}>
      <Container moduleHeading as="h3">Our Products</Container>
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
