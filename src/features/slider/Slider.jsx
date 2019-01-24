import React from 'react'

import { FullWidthContainer, Container } from '../../presentation'
import bg1 from '../../resources/Slider/09.jpeg'

function Slider() {
    const sliderStyle = `
    height: 500px;
    background-color: #000;
    background-image: url('${bg1}');
    background-size: contain;
    background-position: right center;
    background-repeat: no-repeat;
    position: fixed;
    top:0;
    left: 0;
    right: 0;
    z-index: -1;
    padding-top: 140px;

    @media (min-width: 576px) { 
        height: 600px;
        padding-top: 200px;
      }

    h1 {
        color: #deb546;
        width: 80%;
        max-width: 500px;
        font-size: 2em;
        text-align: center;
        background-color: rgba(0,0,0,0.8);
        margin-left: auto;
        margin-right: auto;
        padding: 10px 30px;
        line-height: 150%;
        font-size: 1.6em;

        @media (min-width: 576px) { 
            width: 50%;
            max-width: 600px;
            font-size: 2em;
            text-align: center;
            margin-left: 0;
          }
    }
    `
    return (
        <FullWidthContainer styles={sliderStyle}>
            <Container className="row">
                <Container className="col-sm-10 offset-sm-1">
                    <Container as="h1">Mother's love is always transformed in food and there is no love as pure as hers</Container>
                </Container>
            </Container>
        </FullWidthContainer>
    )
}

export default Slider
