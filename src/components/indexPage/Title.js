import styled from 'styled-components'

import { COLORS, FONTS, media, BREAKPOINTS } from '../../styles/styleguide'

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
  padding: 25px 0;
  color: ${COLORS.GREEN};
  text-align: center;
  white-space: nowrap;
  width: 100%;
  max-width: 800px;
  ${media.lessThan(BREAKPOINTS.MEDIUM_MINUS_ONE)`
    display: none;
  `}

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
