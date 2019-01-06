import styled from 'styled-components'

import { media, BREAKPOINTS } from '../../styles/styleguide'

const Subtitle = styled.h2`
  text-align: center;

  ${media.lessThan(BREAKPOINTS.MEDIUM_MINUS_ONE)`
    margin: 50px 0 20px;
  `}

  ${media.greaterThan(BREAKPOINTS.MEDIUM)`
    margin: 100px 0 20px;
  `}
`

export default Subtitle
