import { Link } from 'gatsby'
import styled from 'styled-components'

import { COLORS } from '../../../styles/styleguide'

const CategoryItem = styled(Link)`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  border: 10px solid ${COLORS.GREEN};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-decoration: none;
`

export default CategoryItem
