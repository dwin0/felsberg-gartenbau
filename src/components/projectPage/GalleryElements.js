import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FiX } from 'react-icons/fi'

import { COLORS } from '../../styles/styleguide'

export const GalleryWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 10;
  margin: auto;
  background: ${COLORS.BLACK_TRANSPARENT_SLIDESHOW};
`

GalleryWrapper.Inner = styled.div`
  position: absolute;
  width: 90%;
  left: 5%;
  top: 50%;
  transform: translateY(-50%);
  max-width: 1000px; /* TODO: */
`

const StyledButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  transform: translateY(-100%);
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${COLORS.GREEN_LIGHT};
  border: none;
  width: 40px;
  height: 40px;
`

export const CloseButton = ({ onClick }) => (
  <StyledButton onClick={onClick}>
    <FiX />
  </StyledButton>
)

CloseButton.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export const Controls = styled.div`
  display: flex;
  border-top: 1px solid ${COLORS.GREY};
`

export const ControlButton = styled.button`
  flex: 1 1 33%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  background: ${COLORS.WHITE};
  border-left: ${props => (props.center ? `1px solid ${COLORS.GREY}` : 'none')};
  border-right: ${props =>
    props.center ? `1px solid ${COLORS.GREY}` : 'none'};
  outline: none;
`
