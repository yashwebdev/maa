import React, { Component } from "react";
import { Container } from "../../presentation";

export default class ImageSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
      images: this.props.images
    };
  }

  nextImage = () => {
    if (this.state.currentIndex === this.state.images.length - 1) {
      return;
    }
    this.setState({ currentIndex: this.state.currentIndex + 1 });
  };

  prevImage = () => {
    if (this.state.currentIndex === 0) {
      return;
    }
    this.setState({ currentIndex: this.state.currentIndex - 1 });
  };

  renderImages = currentIndex => {
    return <Container as="img" src={this.props.images[currentIndex]} />;
  };

  setCurrentIndex = index => {
    this.setState({ currentIndex: index });
  };

  renderDots = (images, currentIndex) => {
    return images.map((item, index) => {
      let selectedClass =
        index === currentIndex ? "fas fa-circle selected" : "fas fa-circle";
      return (
        <i
          onClick={() => this.setCurrentIndex(index)}
          className={selectedClass}
        />
      );
    });
  };

  render() {
    const sliderStyle = `
            width: 100%;
            overflow: hidden;
            margin: 10px 0 10px 0;
            position: relative;
            padding: 0 30px;
            
            img {
                display: block;
                height: 300px; 
                width: 300px;
                margin: auto;
            }
        `;
    const dotsControls = `
        padding: 5px 0;
        display: flex;
        bottom:0;
        left:0;
        right: 0;
        justify-content: center;
        align-items: center;
        margin-top: 10px;
        i {
            font-size: 0.4em;
            color:#c0c0c0;
            margin-right: 3px;
            cursor: pointer;

            &:hover {
                color:#545454;
            }

            &.selected {
                color:#545454;
                font-size: 0.5em;
            }
        }
        `;

    const sliderControls = `
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: absolute;
        top: 0; 
        left: -10px; 
        bottom: 0; 
        right: -10px;

        .fa-chevron-left, .fa-chevron-right {
           font-size: 1em;
           color:#c0c0c0;
           cursor: pointer;

           &: hover {
            color:#545454
           }
        }

        .fa-chevron-left {
            margin-left: 30px;
        }

        .fa-chevron-right {
            margin-right: 30px;
        }
        `;

    const { currentIndex, images } = this.state;

    return (
      <Container as="div">
        <Container as="div" styles={sliderStyle}>
          {images.length && this.renderImages(this.state.currentIndex)}
          {images.length > 1 && (
            <Container as="div" styles={sliderControls}>
              {currentIndex > 0 && (
                <Container
                  onClick={this.prevImage}
                  as="i"
                  className="fas fa-chevron-left"
                />
              )}
              {currentIndex < images.length - 1 && (
                <Container
                  onClick={this.nextImage}
                  as="i"
                  className="fas fa-chevron-right"
                />
              )}
            </Container>
          )}
        </Container>
        {this.state.images.length > 1 && (
          <Container as="div" styles={dotsControls}>
            {this.renderDots(this.state.images, this.state.currentIndex)}
          </Container>
        )}
      </Container>
    );
  }
}
