import React, { Component } from "react";
import { Column, StackableRow, Container } from "../../presentation";
import productsData from "../../Products";
import ImageSlider from "../imageSlider/ImageSlider";
import Popup from '../popup/popup'

const renderProductHeader = (data, openPopup) => {
  const productHeaderStyle = `
    display: flex;
    cursor: pointer;
    padding: 15px;
    z-index: 10;
    width: calc(100% - 40px);
    background-color: #deb546;
    & > i {
      margin-top: 5px;
      margin-right: 5px;
    }
  `;
  const productDescStyle = `
    padding: 15px 0;
    width: 100%;
    margin-bottom: 25px;
  `;

  const smallContainer = `
    width: 100%; 
    margin-right: 20px;

    @media (min-width: 576px) { 
      width: calc(50% - 20px);
    }

    @media (min-width: 992px) { 
      width: calc(33.3% - 20px);
    }
  `

  return data.map((product, index) => {
    return (
      <React.Fragment key={index + "P"}>
        {product.items.length > 1 && <Column>
          <Container as="h3" styles={productHeaderStyle}>
            {product.name}
          </Container>
          <Container as="div" styles={productDescStyle}>
            {product.type === "multiple"
              ? renderMultiple(product, openPopup)
              : renderSingle(product)}
          </Container>
        </Column>}
        {product.items.length === 1 && <Column styles={smallContainer}>
          <Container as="h3" styles={productHeaderStyle}>
            {product.name}
          </Container>
          <Container as="div" styles={productDescStyle}>
            {product.type === "multiple"
              ? renderMultiple(product, openPopup, false)
              : renderSingle(product)}  
          </Container>
        </Column>}
      </React.Fragment>
    );
  });
};

const renderSingle = (product, showName = false) => {
  console.log(product)
  const productDetailContainer = `
    display: flex;
    background-color: #fff;
    flex-direction: column;
    .imageContainer {
      margin-right: 0
    }
    .amazonButton {
      display: block;
      padding: 10px;
      background-color: #00509b;
      color:#fff;
      margin-top: 20px;
      text-align: center;
      width: 200px;
      cursor: pointer;
      i {
        margin:5px 5px 0 5px;
      }
      &:hover i{
        transform: scale(1.2);
      }
  }

    .descContainer {
      padding: 20px 20px;

      .descItems {
        display: flex;
        flex-direction: column;
      }

      @media (min-width: 576px) { 
        padding: 20px 0px;
        .descItems {
          flex-direction: row;
        }
      }
    }

    @media (min-width: 576px) { 
      flex-direction: row;

      .imageContainer {
        margin-right: 20px
      }
    }
  `;
  return (
    <React.Fragment>
      <Container as="div" styles={productDetailContainer}>
        <Container as="div" className="imageContainer">
          <ImageSlider enableSlider={true} images={product.images || []} />
        </Container>
        <Container as="div" className="descContainer">
          {showName && <Container stackable as="h2">
            {product.name}
          </Container>}
          {product.description && (
            <Container stackable as="p" styles="margin-top: 20px;">
              {product.description}
            </Container>
          )}
          {product.healthBenefits &&
            <Container as="div" className="descItems">
              <Container as="h4" styles="color:#1c1c1c; white-space:nowrap;">
                Health Benefits :{" "}
              </Container>
              <Container as="p" styles="width: 95%; padding-left: 10px;">
                {product.healthBenefits}
              </Container>
            </Container>
          }
          <Container as="div" className="descItems">
            <Container as="h4" styles="color:#1c1c1c; white-space:nowrap;">
              Key ingredients :{" "}
            </Container>
            <Container as="p" styles="width: 95%; padding-left: 10px;">
              Ingredient 1, Ingredient 2, Ingredient 3
            </Container>
          </Container>
          <Container as="a" className="amazonButton">
            Buy at <Container as="i" className="fab fa-amazon" />
          </Container>
        </Container>
      </Container>
    </React.Fragment>
  );
};

const renderMultiple = (product, openPopup, fullWidth = true) => {
  const productDetailContainer = `
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
  
    .actionButtons {
      display: flex;
      justify-content: center;
      flex-direction: column;
      margin-top: 20px;
      > * {
        flex: 1;
        display: inline-flex;
        align-items: center;
      }

      .learnMore {
        background-color: #fff;
        margin-bottom: 10px;
      }

      @media (min-width: 992px) { 
        flex-direction: row;
        .learnMore {
          margin-bottom: 0;
        }
      }

    }

    .amazonButton {
        padding: 10px;
        background-color: #00509b;
        color:#fff;

        i {
          margin:5px 5px 0 5px;
        }

        &:hover i{
          transform: scale(1.2);
        }
    }

    .imageContainer {
      margin-right: 0;
      background-color: #fff;
      margin-bottom: 20px;
      text-align: center;
    }

    a {
      color: #00509b;
      text-decoration: none;
      outline: none;
      font-weight: normal;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .descContainer {
      padding: 20px 20px;

      .descItems {
        display: flex;
        flex-direction: column;
        margin-bottom: 10px;

        p {
          width: 95%; 
          padding-left: 0px;
        }
      }

      @media (min-width: 576px) { 
        padding: 20px 0px;
        .descItems {
          flex-direction: row;
          p {
            padding-left: 10px;
          }
        }
      }
    }

    @media (min-width: 576px) { 
        flex-direction: row;
        width: 100% ;
        border: none;
        .imageContainer {
          margin-right: ${fullWidth ? '20px' : '0'};
          width: ${fullWidth ? 'calc(50% - 20px)' : '100%'};
          box-shadow: 0px 4px 15px rgba(0,0,0,0.2);
        }
      }

    @media (min-width: 992px) { 
        .imageContainer {
          width: ${fullWidth ? 'calc(33% - 22.5px)' : '100%'};
        }
      }
  `;
  return (
    <React.Fragment>
      {product.description && (
        <Container stackable as="p">
          {product.description}
        </Container>
      )}
      <Container
        as="div"
        styles={productDetailContainer}
        stackable
      >
        {product.items.map((item, index) => (
          <Container as="div" className="imageContainer">
            <Container as="h3" styles="margin-bottom: 20px; margin-top: 20px;">
              {item.name}
            </Container>
            <ImageSlider stackable images={item.images || []} enableSlider={false} />
            <Container as="div" className="actionButtons">
              <Container as="a" className="learnMore" onClick={() => openPopup(renderSingle(item, true))}>
                Learn more
              </Container>
              <Container as="a" className="amazonButton">
                Buy at <Container as="i" className="fab fa-amazon" />
              </Container>
            </Container>

          </Container>
        ))}
      </Container>
    </React.Fragment>
  );
};

class ProductsList2 extends Component {
  state = {
    isPopupOpen: false,
    popupData: null
  }
  openPopup = (data) => {
    document.body.classList.add('popup-open')
    this.setState({ popupData: data, isPopupOpen: true })
  }

  closePopup = () => {
    document.body.classList.remove('popup-open')
    this.setState({ isPopupOpen: false })
  }
  render() {
    return (
      <React.Fragment>
        <StackableRow mediumPadded styles='margin-top: -100px;'>
          <Column className="col-sm-12">
            <Container as="h3" firstHeading moduleHeading>
              OUR PRODUCTS
            </Container>
            <Container as="p">
              We collect raw materials for products directly from the farmers.
              This brings out the dual benefits of a natural and chemical-free
              flavour in the final products as well as financial growth of the
              farmers we deal with.
            </Container>
            <Container as="p">
              The entire gamut of products manufactured at our plant ensures the
              best of quality, purity, hygiene and nutrition without
              compromising on lip-smacking flavours.
            </Container>
          </Column>
        </StackableRow>
        <StackableRow>{renderProductHeader(productsData, this.openPopup)}</StackableRow>
        {this.state.isPopupOpen && <Popup closePopup={this.closePopup}>{this.state.popupData}</Popup>}
      </React.Fragment>
    );
  }
}

export default ProductsList2;
