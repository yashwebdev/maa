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
    `}

    ${props => props.moduleHeading && css`
      font-size: 1.5em;
      margin-bottom: 15px;
      color: #d4d4de;
    `}
    ${props => props.styles}
`
