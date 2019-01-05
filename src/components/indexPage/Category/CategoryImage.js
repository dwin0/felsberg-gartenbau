import Image from 'gatsby-image'
import styled from 'styled-components'

import { media, BREAKPOINTS } from '../../../styles/styleguide'

const CategoryImage = styled(Image)`
  border-radius: 15%;
  margin: auto;

  ${media.lessThan(BREAKPOINTS.MEDIUM_MINUS_ONE)`
    max-width: 250px;
  `}

  ${media.greaterThan(BREAKPOINTS.MEDIUM)`
    max-width: 350px;
    min-width: 250px;
  `}
`

export default CategoryImage
