import styled from 'styled-components'
import Image from 'gatsby-image'

import { COLORS } from '../../../styles/styleguide'

const CategoryImage = styled(Image)`
  position: relative;
  border-radius: 15% 0 0 15%;

  ::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: ${COLORS.BLACK_TRANSPARENT};
  }
`

export default CategoryImage
