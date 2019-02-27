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
      <React.Fragment>
        <Column className="col-sm-12">
          <Container as="h3" styles={productHeaderStyle}>
            {product.name}
          </Container>
          <Container styles={productDescStyle}>
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

    @media (min-width: 576px) { 
      flex-direction: row;

      .imageContainer {
        margin-right: 20px
      }
    }
  `;
  return (
    <React.Fragment>
      <Container styles={productDetailContainer}>
        <Container className="imageContainer">
          <ImageSlider images={product.images || []} />
        </Container>
        <Container>
          {product.description && (
            <Container stackable as="p" styles="margin-top: 20px;">
              {product.description}
            </Container>
          )}
          <Container styles="display: flex;">
            <Container as="h4" styles="color:#1c1c1c; white-space:nowrap;">
              Key ingredients :{" "}
            </Container>
            <Container as="p" styles="width: 95%; padding-left: 10px;">
              Ingredient 1, Ingredient 2, Ingredient 3
            </Container>
          </Container>
          <Container styles="display: flex;">
            <Container as="h4" styles="color:#1c1c1c; white-space:nowrap;">
              Buy this product on :{" "}
            </Container>
            <Container as="p" styles="width: 95%; padding-left: 10px;">
              Amazon
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
    background-color: #fff;
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

    @media (min-width: 576px) { 
      flex-direction: row;

      .imageContainer {
        margin-right: 20px
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
      {product.items.map(item => (
        <Container styles={productDetailContainer} stackable>
          <Container className="imageContainer">
            <ImageSlider images={item.images || []} />
          </Container>
          <Container styles="padding: 20px 0;">
            <Container as="h3" styles="margin-bottom: 5px;">
              {item.name}
            </Container>
            <Container styles="display: flex; flex-direction: column; justify-content: center; padding-right: 15px;">
              <Container as="p" styles="margin-bottom: 25px; color:#000;">
                {item.description}
              </Container>
              {item.healthBenefits && (
                <Container styles="display: flex; margin-bottom: 10px;">
                  <Container
                    as="h4"
                    styles="color:#1c1c1c; white-space:nowrap;"
                  >
                    Health benefits :{" "}
                  </Container>
                  <Container as="p" styles="width: 95%; padding-left: 10px;">
                    {item.healthBenefits}
                  </Container>
                </Container>
              )}
              {item.ingredients && 
              <Container styles="display: flex; margin-bottom: 10px;">
                <Container as="h4" styles="color:#1c1c1c; white-space:nowrap;">
                  Key ingredients :{" "}
                </Container>
                <Container as="p" styles="width: 95%; padding-left: 10px;">
                  Ingredient 1, Ingredient 2, Ingredient 3
                </Container>
              </Container>
              }
              <Container styles="display: flex;">
                <Container as="h4" styles="color:#1c1c1c; white-space:nowrap;">
                  Buy this product on :{" "}
                </Container>
                <Container as="p" styles="width: 95%; padding-left: 10px;">
                  <Container as="a" href={item.url}><Container as='i' className="fab fa-amazon" /> Amazon</Container>
                </Container>
              </Container>
            </Container>
          </Container>
        </Container>
      ))}
    </React.Fragment>
  );
};

class ProductsList extends Component {
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

export default ProductsList;
