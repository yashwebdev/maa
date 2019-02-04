import React from 'react'
import Container from './Container'

function StackableRow(props) {
    const rowDefaultStyle = `
        width: 100%;
        max-width: 100vw;
        width: 100vw;
        margin-top: 0;
        margin-bottom: 0;
        margin-left: calc(-50v + 50%);
        padding: ${props.smallPadded ? '15px 0' : props.mediumPadded ? '25px 0' : props.largePadded ? '40px 0' : '0'};
        background-color: #f9f9f9;
        background-image: ${props.backImage ? `url('${props.backImage}')` : 'none'};
        background-repeat: repeat;
        padding-left: 15px;
        padding-right: 15px;
    
        @media (min-width: 576px) { 
            padding-left: 0;
            padding-right: 0;
          }
    `

    
    const stackableRowContainer = `
        display: flex;
        align-items: ${props.alignItems ? props.alignItems : 'flex-start'};
        @media (min-width: 1200px) { 
            max-width: 1680px;
            margin: auto;
          }
    
    `

    let finalStyle = props.styles ? rowDefaultStyle + props.styles : rowDefaultStyle

    return (
            <Container as="div" class="row" styles={finalStyle}>
                <Container as="div" className="col-sm-10 offset-sm-1">
                    <Container as="div" className="row" styles={stackableRowContainer}>
                        {props.children}
                    </Container>
                </Container>
            </Container>
    )
}

export default StackableRow
