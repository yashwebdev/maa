import React from 'react'
import { Column, StackableRow, Container } from '../../presentation'

function VisionMission() {
    const VisionMissionStyle = `
        background-color: #f9f9f9;
        padding-top: 0px;
        margin-top: -1px;

        @media (min-width: 576px) { 
            padding-top: 20px;
          }
        
    `
    const headingStyle = `
        color: #000;
    `
    const firstDivStyle = `
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        & > div {
            width: 100%;
            margin-bottom: 20px;
            @media (min-width: 576px) { 
                width: 47%;
              }
        }

        p.special {
            width: 80%;
            margin: 40px auto 0 auto;
            font-size: 1.3em;
            text-align: center;
            color: #000;
            background-color: #57de46;
            padding: 15px;
        }

    `
    return (
        <StackableRow largePadded styles={VisionMissionStyle}>
            <Column className="col-sm-12"  styles={firstDivStyle} vTop>
                <Container as="div">
                    <Container as="h3" moduleHeading styles={headingStyle}>OUR VISION</Container>
                    <Container as="p">MAA is an initiative by a young group of entrepreneurs to promote a healthy lifestyle by providing food products that satisfy the taste buds without compromising on health. We believe that positive vibrations and intentions while cooking and preparation of food keep a vital role in the formation of its taste and texture.</Container>
                    <Container as="p">So, we at MAA make sure that our products are very intelligently, cautiously & hygienically cooked in a pure environment under the guidance of experienced women entrepreneurs who pour their love to give the feel of "MAA ke haath ka swaad". The products that we offer at MAA are natural, healthy, organic & absolutely unique. We strive to deliver the most superior quality, prominent service and best in class products.</Container>
                    <Container as="p" className="special">To establish MAA as a universally acceptable brand, in terms of affordability and geographical presence</Container>
                </Container>
                <Container as="div">
                    <Container as="h3" moduleHeading styles={headingStyle}>OUR MISSION</Container>
                    <Container as="p">MAA is an initiative by a young group of entrepreneurs to promote a healthy lifestyle by providing food products that satisfy the taste buds without compromising on health. We believe that positive vibrations and intentions while cooking and preparation of food keep a vital role in the formation of its taste and texture.</Container>
                    <Container as="p">So, we at MAA make sure that our products are very intelligently, cautiously & hygienically cooked in a pure environment under the guidance of experienced women entrepreneurs who pour their love to give the feel of "MAA ke haath ka swaad". The products that we offer at MAA are natural, healthy, organic & absolutely unique. We strive to deliver the most superior quality, prominent service and best in class products.</Container>
                    <Container as="p" className="special">Transforming the lives of the consumers by providing the tastiest savouries ever, without compromising on health</Container>
                </Container>
            </Column>
        </StackableRow>
    )
}

export default VisionMission
