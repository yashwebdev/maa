import React from 'react'
import {Column, StackableRow, Container} from '../../presentation'

function Brief() {
    const briefStyle = `
        background-color: #f9f9f9;
        padding-top: 30px;
    `
    return (
        <StackableRow smallPadded styles={briefStyle}>
            <Column className="col-sm-12">
                <Container as="h3" firstHeading moduleHeading>BRIEF ON MAA</Container>
                <Container as="p">MAA is an initiative by a young group of entrepreneurs to promote a healthy lifestyle by providing food products that satisfy the taste buds without compromising on health. We believe that positive vibrations and intentions while cooking and preparation of food keep a vital role in the formation of its taste and texture.</Container>
                <Container as="p">So, we at MAA make sure that our products are very intelligently, cautiously & hygienically cooked in a pure environment under the guidance of experienced women entrepreneurs who pour their love to give the feel of "MAA ke haath ka swaad". The products that we offer at MAA are natural, healthy, organic & absolutely unique. We strive to deliver the most superior quality, prominent service and best in class products.</Container>
            </Column>
        </StackableRow>
    )
}

export default Brief
