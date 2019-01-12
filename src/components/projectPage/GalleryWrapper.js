import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FiX } from 'react-icons/fi'

import { COLORS } from '../../styles/styleguide'

const GalleryWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 10;
  margin: auto;
  background: ${COLORS.WHITE_TRANSPARENT};
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
  height: 30px;
`

export const CloseButton = ({ onClick }) => (
  <StyledButton onClick={onClick}>
    <FiX />
  </StyledButton>
)

CloseButton.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default GalleryWrapper
