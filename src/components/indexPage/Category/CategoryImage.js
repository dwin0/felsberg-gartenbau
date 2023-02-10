import { GatsbyImage as Image } from 'gatsby-plugin-image'
import styled from 'styled-components'

import { media, BREAKPOINTS } from '../../../styles/styleguide'

const CategoryImage = styled(Image)`
  margin: auto;

  ${media.lessThan(BREAKPOINTS.MEDIUM_MINUS_ONE)`
    max-width: 250px;
  `}

  ${media.greaterThan(BREAKPOINTS.MEDIUM)`
    max-width: 350px;
    min-width: 250px;
  `}

  img {
    border-radius: 15%;
  }
`

export default CategoryImage
