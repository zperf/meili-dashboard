import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Wrapper = styled.li`
  background-color: white;
  list-style-type: none;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.05);
  border-radius: 50px;
  padding: 10px;
`

const Card = ({ children, ...props }) => (
  <Wrapper {...props}>{children}</Wrapper>
)

Card.propTypes = {
  /**
   * The content to appear inside the Card
   */
  children: PropTypes.node,
}

Card.defaultProps = {
  children: null,
}

export default Card
