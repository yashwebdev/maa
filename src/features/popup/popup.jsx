import React, { Component } from 'react'
import { Column, StackableRow, Container } from "../../presentation";
import popupStyle from './popupStyle'

export class Popup extends Component {
  render() {
    return (
      <Container styles={popupStyle}>
        <Container className="popupContainer">
            <Container as='span' className="closeButton"><Container as="i" className="fas fa-times" onClick={this.props.closePopup}></Container></Container>
            {this.props.children}
        </Container>
      </Container>
    )
  }
}

export default Popup
