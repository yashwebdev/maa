import React from 'react'
import Container from './Container'

function Column(props) {
  let finalStyle = ``
  const defaultColumnStyle = `
        display: flex;
        flex-direction: ${props.dirColumn ? 'column' : 'row'};
        justify-content: ${props.hRight ? 'flex-end' : props.hLeft ? 'flex-start' : props.hCenter ? 'center' : 'flex-start'};
        align-items: ${props.vTop ? 'flex-end' : props.vBottom ? 'flex-start' : props.vCenter ? 'center' : 'center'};
        flex-wrap: wrap;
        padding: 0 !important;
    `

  if (props.styles) {
    finalStyle = defaultColumnStyle + props.styles
  } else {
    finalStyle = defaultColumnStyle
  }

  return (
    <Container as="div" {...props} styles={finalStyle}>
      {props.children}
    </Container>
  )
}

export default Column
