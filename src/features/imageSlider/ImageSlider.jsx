import React, { Component } from 'react'
import { Column, StackableRow, Container } from '../../presentation'

export default class ImageSlider extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentIndex: 0,
            endIndex: this.props.images.length
        }
    }

    nextImage = () => {
        this.setState({ currentIndex: this.state.currentIndex === this.state.endIndex ? 0 : this.state.currentIndex + 1 })
    }

    prevImage = () => {
        this.setState({ currentIndex: this.state.currentIndex === 0 ? this.state.endIndex : this.state.currentIndex - 1 })
    }

    renderImages = () => {
        return this.props.images.map(image => <Container as="img" src={image}></Container>)
    }

    render() {
        const sliderStyle=`
            width: 100%;
            overflow: hidden;
            position: relative;
            margin: 10px 0 10px 0;
                 img {
                display: block;
                max-width: 70%;
                height: 100%;
                margin: auto;
            }
        `
        const sliderControls = `
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        text-align: center;
        margin: auto;
        position: absolute;
        top: 0; left: 0; bottom: 0; right: 0;

        .fa-chevron-left, .fa-chevron-right {
           font-size: 1.2em;
           border: 1px solid #666;
           padding: 3px 5px;
           color:#666;
           cursor: pointer;

           &: hover {
            color:#000
            border-color: #000;
           }
        }

        .fa-chevron-left {
            margin-left: 30px;
        }

        .fa-chevron-right {
            margin-right: 30px;
        }
        `

        return (
            <Container as="div" styles={sliderStyle}>
                {this.props.images.length ? this.renderImages() : null}
                <Container as="div" styles={sliderControls}><Container as="i" className="fas fa-chevron-left"></Container><Container as="i" className="fas fa-chevron-right"></Container></Container>
            </Container>
        )
    }
}
