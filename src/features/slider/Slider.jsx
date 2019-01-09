import React from 'react'

import { FullWidthContainer,Container } from '../../presentation'
import bg1 from '../../resources/Slider/2.jpeg'

function Slider() {
    const sliderStyle = `
    height: 600px;
    background-color: #000;
    background-image: url('${bg1}');
    background-size: cover;
    background-position: right 50px;
    background-repeat: no-repeat;
    position: fixed;
    top:0;
    left: 0;
    right: 0;
    z-index: -1;
    padding-top: 200px;
    padding-left: 120px;
    h1 {
        color: #e5c454;
        width: 40%;
        font-size: 2em;
        text-align: center;
    }
    `
    return (
        <FullWidthContainer styles={sliderStyle}>
            <Container as="h1">Grab a healthy & delicious snack and taste the Goodness</Container>
        </FullWidthContainer>
    )
}

export default Slider
