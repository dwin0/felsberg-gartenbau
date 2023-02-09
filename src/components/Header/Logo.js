import { Link } from 'gatsby'
import styled from 'styled-components'

import { COLORS, FONTS, media, BREAKPOINTS } from '../../styles/styleguide'

const Logo = styled(Link)`
  ${FONTS.STANDARD_TEXT_BOLD}
  color: ${COLORS.GREEN};
  text-decoration: none;
  text-align: center;
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 20px;

  ${media.lessThan(BREAKPOINTS.LARGE_MINUS_ONE)`
    padding: 0 10px;
    font-size: 20px;
  `}

  ${media.greaterThan(BREAKPOINTS.MEDIUM)`
    font-size: 16px;
  `}

  ${media.greaterThan('800px')`
    font-size: 20px;
  `}
`

export default Logo
