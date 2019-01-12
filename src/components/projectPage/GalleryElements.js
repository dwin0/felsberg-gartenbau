import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FiX } from 'react-icons/fi'

import { COLORS, media, BREAKPOINTS } from '../../styles/styleguide'

export const GalleryWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 10;
  background: ${COLORS.BLACK_TRANSPARENT_SLIDESHOW};
  display: flex;
  justify-content: center;
  align-items: center;
`

GalleryWrapper.Inner = styled.div`
  position: relative;
  width: 90%;
  max-width: 1000px; /* when this is changed, also change the graphQL query */
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
  background: ${COLORS.WHITE};
  border: 1px solid ${COLORS.GREY};
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
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${COLORS.WHITE};
  border-left: ${props => (props.center ? `1px solid ${COLORS.GREY}` : 'none')};
  border-right: ${props =>
    props.center ? `1px solid ${COLORS.GREY}` : 'none'};
  outline: none;
`

export const SingleSlideWrapper = styled.div`
  max-height: 70vh;
  overflow: scroll;
`

export const ImageDescription = styled.p`
  line-height: 1;
  white-space: normal;
  overflow: scroll;
  min-height: 100px;
  max-height: 100px;

  ${media.lessThan(BREAKPOINTS.MEDIUM_MINUS_ONE)`
    padding: 20px;
  `}

  ${media.greaterThan(BREAKPOINTS.MEDIUM)`
    padding: 20px 80px;
  `}
`
