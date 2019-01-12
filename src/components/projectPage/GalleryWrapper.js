import styled from 'styled-components'

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

export default GalleryWrapper
