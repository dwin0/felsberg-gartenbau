import styled from 'styled-components'
import Img from 'gatsby-image'

import { COLORS } from '../../../styles/styleguide'

export const CategoryImage = styled(Img)`
  /*  position: absolute; already set as prop */
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  ::before {
    content: '';
    position: absolute;
    background: ${props =>
      props.hovered ? COLORS.YELLOW_TRANSPARENT : COLORS.GREEN_TRANSPARENT};
    width: 100%;
    height: 100%;
    z-index: 1;
  }
`

export default CategoryImage
