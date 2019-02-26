import React from 'react'
import styled, {css} from 'styled-components'
function Container(props) {
  return (
    <div {...props}>
      {props.children}
    </div>
  )
}

export default styled(Container)`
 
    ${props => props.stackable && css`
        margin-bottom: 20px;

        &:last-child {
          margin-bottom: 0;
        }
    `}

    ${props => props.moduleHeading && css`
      width: 100%;
      font-size: 1.5em;
      margin-bottom: 15px;
      color: #fff;
    `}

    ${props => props.firstHeading && css`
    color: #000;
    width: max-content;
    background-color:#f9f9f9; 
    color: #000;
    padding: 10px 20px 25px 20px; 
    margin-top: -90px; 
    margin-left: -20px
    `}

    ${props => props.styles}
`
