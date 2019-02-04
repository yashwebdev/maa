import React, { Component } from 'react'
import Header from '../features/header/Header'
import Footer from '../features/footer/Footer'
import Slider from '../features/slider/Slider'
import MainProducts from '../features/mainProducts/MainProducts'
import Brief from '../features/brief/Brief'
import VisionMission from '../features/visionMission/VisionMission'
export default class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <Header fixed selected="about us"/>
                <Slider heading="Mother's love is always transformed in food and there is no love as pure as hers" />
                <Brief />
                <MainProducts />
                <VisionMission />
                <Footer />
            </React.Fragment>
        )
    }
}
