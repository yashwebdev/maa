import React, { Component } from "react";
import { Column, StackableRow, Container } from "../../presentation";
import productsData from "../../Products";
import ImageSlider from "../imageSlider/ImageSlider";

const renderProductHeader = data => {
  const productHeaderStyle = `
    display: flex;
    cursor: pointer;
    padding: 15px;
    width: 100%;
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

  return data.map((product, index) => {
    return (
      <React.Fragment key={index + "P"}>
        <Column className="col-sm-12">
          <Container as="h3" styles={productHeaderStyle}>
            {product.name}
          </Container>
          <Container as="div" styles={productDescStyle}>
            {product.type === "multiple"
              ? renderMultiple(product)
              : renderSingle(product)}
          </Container>
        </Column>
      </React.Fragment>
    );
  });
};

const renderSingle = product => {
  const productDetailContainer = `
    display: flex;
    background-color: #fff;
    flex-direction: column;
    .imageContainer {
      margin-right: 0
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
          <ImageSlider images={product.images || []} />
        </Container>
        <Container as="div" className="descContainer">
          {product.description && (
            <Container stackable as="p" styles="margin-top: 20px;">
              {product.description}
            </Container>
          )}
          <Container as="div" className="descItems">
            <Container as="h4" styles="color:#1c1c1c; white-space:nowrap;">
              Key ingredients :{" "}
            </Container>
            <Container as="p" styles="width: 95%; padding-left: 10px;">
              Ingredient 1, Ingredient 2, Ingredient 3
            </Container>
          </Container>
          <Container as="div" className="descItems">
            <Container as="h4" styles="color:#1c1c1c; white-space:nowrap;">
              Buy this product on :{" "}
            </Container>
            <Container as="p" styles="width: 95%; padding-left: 10px;">
              <Container as="a" target="_blank" href={product.url}>
                <Container as="i" className="fab fa-amazon" /> Amazon
              </Container>
            </Container>
          </Container>
        </Container>
      </Container>
    </React.Fragment>
  );
};

const renderMultiple = product => {
  const productDetailContainer = `
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    .imageContainer {
      margin-right: 0
    }

    a {
      color: #0000EE;
      text-decoration: none;
      outline: none;
      font-weight: normal;
      cursor: pointer;
      display: inline-flex;
      align-items: center;

      i{
        margin-top: 5px;
        margin-right: 5px;
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
        margin-bottom: 10px;

        p {
          width: 95%; 
          padding-left: 0px;
        }
      }

      @media (min-width: 768px) { 
        padding: 20px 0px;
        .descItems {
          flex-direction: row;
          p {
            padding-left: 10px;
          }
        }
      }
    }

    @media (min-width: 768px) { 
      flex-direction: row;
      border: none;
      .imageContainer {
        margin-right: 20px
        text-align: center;
        width: calc(33% - 20px);
        background-color: #fff;
        margin-bottom: 20px;
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
            <Container as="h3" styles="margin-bottom: 10px; margin-top: 10px;">
              {item.name}
            </Container>
            <Container as="a" styles='margin-bottom: 15px;'>Learn more </Container>
            <ImageSlider images={item.images || []} />
          </Container>
        ))}
      </Container>
    </React.Fragment>
  );
};

class ProductsList2 extends Component {
  render() {
    return (
      <React.Fragment>
        <StackableRow mediumPadded>
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
        <StackableRow>{renderProductHeader(productsData)}</StackableRow>
      </React.Fragment>
    );
  }
}

export default ProductsList2;
