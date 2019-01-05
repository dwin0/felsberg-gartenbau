import styled from 'styled-components'
import { Link } from 'gatsby'

import { media, BREAKPOINTS, COLORS } from '../../../styles/styleguide'

export const MobileImageLink = styled(Link)`
  width: 100%;
  ${media.greaterThan(BREAKPOINTS.MEDIUM)`
    display: none;
  `}
`

export const DesktopImageLink = styled(Link)`
  width: 100%;
  flex: 1 1 30%;
  ${media.lessThan(BREAKPOINTS.MEDIUM_MINUS_ONE)`
    display: none;
  `}
`

export const ButtonLink = styled(Link)`
  display: flex;
  width: 200px;
  height: 40px;
  justify-content: center;
  align-items: center;
  text-decoration: none;

  color: ${COLORS.GREEN};
  border: ${COLORS.GREEN} 2px solid;

  :hover {
    background: ${COLORS.GREEN};
    color: ${COLORS.WHITE};
    transition-property: background, color;
    transition-duration: 0.4s;
    transition-timing-function: ease;
  }
`
