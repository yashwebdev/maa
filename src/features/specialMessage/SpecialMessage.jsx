import React from 'react'
import { Column, StackableRow, Container } from '../../presentation'

function SpecialMessage(props) {
    const specialMessageStyle = `
        background-image: url('${props.backImage}');
        background-position: center center;
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-size: cover;        

        & .specialMessageContainer {
            height: 250px;
            text-align: center;

            & h2 {
                background-color: rgba(0,0,0,0.8);
                color: #fff;
                padding: 20px 40px;
            }

            button {
                margin-top: 30px;
            }
        }
    `
    return (
        <StackableRow largePadded styles={specialMessageStyle}>
            <Column vCenter hCenter className="col-sm-12 specialMessageContainer">
                <Container as="div">{props.children}</Container>
            </Column>
        </StackableRow>
    )
}

export default SpecialMessage
