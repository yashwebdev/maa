import React, { Component } from 'react'
import Header from '../features/header/Header'
import Slider from '../features/slider/Slider'
import Footer from '../features/footer/Footer'
import ProductsList from '../features/productsList/ProductsList'

export class Products extends Component {
  componentWillMount() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
  render() {
    return (
        <React.Fragment>
            <Header selected="our products"/>
            <Slider heading="MAA offers you a unique range of products that are purely organic and promote organic farming directly." height={500} />
            <ProductsList />
            <Footer />
        </React.Fragment>
    )
  }
}

export default Products
