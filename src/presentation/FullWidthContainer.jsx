import React from 'react'
import Container from './Container'

function FullWidthContainer(props) {
    const fullWidthStyle = `
    width: 100vw;
    margin-left: calc(-50vw + 50%);
    padding-left: 10px;
    padding-right: 10px;

    @media (min-width: 576px) { 
        padding-left: 0;
        padding-right: 0;
      }

    `
    const finalStyle = props.styles ? fullWidthStyle + props.styles : fullWidthStyle

    return (
        <Container as="div" styles={finalStyle}>
            {props.children}
        </Container>
    )
}

export default FullWidthContainer
