import styled, { keyframes } from 'styled-components'
import Img from 'gatsby-image'

import { COLORS } from '../../../styles/styleguide'

const removeBackground = keyframes`
    to {
      background: none
    }
  `

export const CategoryImage = styled(Img)`
  /*  position: absolute; already set as prop */
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  ::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
    background: ${COLORS.WHITE_TRANSPARENT};
    animation: ${props => props.hovered && removeBackground} 0.5s forwards;
  }
`

export default CategoryImage
