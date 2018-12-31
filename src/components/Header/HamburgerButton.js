import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { COLORS, media, BREAKPOINTS } from '../../styles/styleguide'

const Button = styled.button`
  width: 50px;
  min-width: 50px;
  margin: 10px;
  border: none;
  background: none;
  outline: none;

  ${media.greaterThan(BREAKPOINTS.MEDIUM)`
    display: none;
  `};
`

const Inner = styled.span`
  display: block;
  height: 4px;
  border-radius: 4px;
  margin: 4px 0;
  background-color: ${COLORS.BLACK};
  transition: all 0.3s ease-in-out;
`

const Inner1 = styled(Inner)`
  transform: ${props =>
    props.isOpen ? 'translateY(6px) rotate(45deg)' : 'none'};
`
const Inner2 = styled(Inner)`
  transform: ${props => (props.isOpen ? 'scale(0)' : 'none')};
`
const Inner3 = styled(Inner)`
  transform: ${props =>
    props.isOpen ? 'translateY(-10px) rotate(-45deg)' : 'none'};
`

const HamburgerButton = ({ clickHandler, isOpen }) => (
  <Button onClick={clickHandler}>
    <Inner1 isOpen={isOpen} />
    <Inner2 isOpen={isOpen} />
    <Inner3 isOpen={isOpen} />
  </Button>
)

HamburgerButton.propTypes = {
  clickHandler: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
}

export default HamburgerButton
