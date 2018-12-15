import styled from 'styled-components'

import { COLORS, FONTS } from '../../styles/styleguide'

export const ImageTitleWrapper = styled.div`
  position: relative;
`

export const Title = styled.h1`
  ${FONTS.LARGE_BOLD}
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
  display: block;
  padding: 25px 100px;
  color: ${COLORS.GREEN};
  text-align: center;

  ::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    background: ${COLORS.WHITE};
    opacity: 0.8;
    z-index: -1;
  }
`
