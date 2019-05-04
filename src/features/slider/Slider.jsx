import React from 'react'
import { FullWidthContainer, StackableRow, Container } from '../../presentation'
import bg1 from '../../resources/Slider/12.JPG'
import bg2 from '../../resources/Slider/12.jpeg'


class Slider extends React.Component {
    constructor(props) {
        super(props)
        this.state = { backImages: [bg1, bg2], currentImage: 0 }
        this.slider = React.createRef();
        this.sliderStyle = () => `
        background-color: #000;
        height: 100vh;
        position: relative;
        z-index: -1;
        top:0;
        left: 0;
        right: 0;
        padding-top: 35vh;
    
        @media (min-width: 576px) { 
            padding-top: 250px;
          }
    
        h1, p {
            position: relative;
            color: #deb546;
            width: 80%;
            max-width: 500px;
            font-size: 2.3em;
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
                margin-left: 100px;
              }
        }
        `
    }

    backgroundImageStyle = (image) => `
        background-image: url('${image}');
        background-size: cover;
        background-position: center center;
        @media (min-width: 576px) { 
            background-position: right -350px top;
          }
        background-repeat: no-repeat;
        transition: background-image 1.5s ease-out;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    `

    startSlider = () => {
        if (this.state.currentImage === this.state.backImages.length - 1) {
            this.setState({ currentImage: 0 })
        } else {
            this.setState({ currentImage: ++this.state.currentImage })
        }
        //document.getElementById('divSliderContainer').style.backgroundImage = `url('${this.state.backImages[this.state.currentImage]}')`;
        setTimeout(() => { this.startSlider() }, 4000);
    }

    componentDidMount() {
        setTimeout(() => { this.startSlider() }, 2000);
    }

    renderBackgroundImages = (image) => {
        return <Container as="div" styles={this.backgroundImageStyle(this.state.backImages[image])}></Container>
    }

    render() {
        return (
            <FullWidthContainer styles={this.sliderStyle()} id="divSliderContainer">
                {this.renderBackgroundImages(this.state.currentImage)}
                <Container as="div" className="HeadingContainer">
                    <Container as="h1">{this.props.heading}</Container>
                </Container>
            </FullWidthContainer>
        )
    }
}

export default Slider
