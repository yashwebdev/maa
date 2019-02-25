import React, { Component } from 'react'
import { Column, StackableRow, Container } from '../../presentation'
import productsData from '../../Products'
import ImageSlider from '../imageSlider/ImageSlider'

const renderProductHeader = (data) => {
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
  `
  const productDescStyle = `
    padding: 15px;
    border: 1px solid #deb546;
    width: 100%;
    margin-bottom: 25px;
  `

  return data.map((product, index) => {
    return (
      <React.Fragment>
        <Column className="col-sm-12">
          <Container as="h3" styles={productHeaderStyle}>{product.name}</Container>
          <Container styles={productDescStyle}>
            <Container stackable as="p">{product.description}</Container>
            <Container className="row">
              {product.items.map(item => (
                <Container className="col-sm-12">
                  <Container stackable styles=' background-color:#fff; display: flex;'>
                    <Container styles='flex-shrink: 0; margin-right: 20px'>
                      <ImageSlider images={item.images || []} />
                    </Container>
                    <Container styles='padding: 20px 0;'>
                      <Container as="h3" styles='margin-bottom: 5px;'>{item.name}</Container>
                      <Container styles='display: flex; flex-direction: column; justify-content: center; padding-right: 15px;'>
                        <Container as="p" styles='margin-bottom: 15px; color:#000;'>{item.description}</Container>
                        <Container styles='display: flex;'><Container as="h4" styles='color:#1c1c1c; white-space:nowrap;'>Health benefits : </Container><Container as="p" styles='width: 95%; padding-left: 10px;'>healthy cholesterol, boosts immune system, aids in curing cancer, promotes formation of RBCs</Container></Container>
                        <Container styles='display: flex;'><Container as="h4" styles='color:#1c1c1c; white-space:nowrap;'>Key ingredients : </Container><Container as="p" styles='width: 95%; padding-left: 10px;'>Ingredient 1, Ingredient 2, Ingredient 3</Container></Container>
                        <Container styles='display: flex;'><Container as="h4" styles='color:#1c1c1c; white-space:nowrap;'>Buy this product on : </Container><Container as="p" styles='width: 95%; padding-left: 10px;'>Amazon</Container></Container>
                      </Container>
                    </Container>
                  </Container>
                </Container>
              ))}
            </Container>
          </Container>
        </Column>
      </React.Fragment>
    )
  })
}

class ProductsList extends Component {
  render() {
    return (
      <React.Fragment>
        <StackableRow mediumPadded>
          <Column className="col-sm-12">
            <Container as="h3" firstHeading moduleHeading>OUR PRODUCTS</Container>
            <Container as="p">We collect raw materials for products directly from the farmers. This brings out the dual benefits of a natural and chemical-free flavour in the final products as well as financial growth of the farmers we deal with.</Container>
            <Container as="p">The entire gamut of products manufactured at our plant ensures the best of quality, purity, hygiene and nutrition without compromising on lip-smacking flavours.</Container>
          </Column>

        </StackableRow>
        <StackableRow smallPadded>
          {renderProductHeader(productsData)}
        </StackableRow>
      </React.Fragment>
    )
  }
}

export default ProductsList
