import styled from 'styled-components'
import { Link } from 'gatsby'

import { media, BREAKPOINTS } from '../../../styles/styleguide'
import { buttonStyle } from '../../common/Button'

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
  ${buttonStyle}
`
