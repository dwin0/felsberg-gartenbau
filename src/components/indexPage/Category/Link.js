import { Link } from 'gatsby'
import styled from 'styled-components'

import { COLORS } from '../../../styles/styleguide'

const CategoryLink = styled(Link)`
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

export default CategoryLink
