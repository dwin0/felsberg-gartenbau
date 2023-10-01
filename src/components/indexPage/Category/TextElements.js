import styled from 'styled-components'

import { media, BREAKPOINTS, FONTS, COLORS } from '../../../styles/styleguide'

export const CategoryTitle = styled.h2`
  ${FONTS.MEDIUM_BOLD}
  color: ${COLORS.GREEN};

  ${media.lessThan(BREAKPOINTS.MEDIUM_MINUS_ONE)`
    margin: 20px 0;
  `}
`

export const CategoryText = styled.p`
  color: ${COLORS.BLACK};
  margin: 20px 0;
`
