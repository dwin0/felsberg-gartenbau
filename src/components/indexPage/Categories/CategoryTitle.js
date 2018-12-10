import styled from 'styled-components'
import { COLORS, FONTS } from '../../../styles/styleguide'

const borderBottomWidth = '3px'

const CategoryTitle = styled.p`
  font: ${FONTS.LARGE_LINK};
  color: ${COLORS.GREEN};

  /* underline style */
  padding-bottom: 3px;
  border-bottom-width: ${borderBottomWidth};
  border-bottom-color: ${COLORS.GREEN};
  border-bottom-style: ${props => (props.hovered ? 'solid' : 'none')};
  margin-bottom: ${props => (props.hovered ? `-${borderBottomWidth}` : 0)};
`

export default CategoryTitle
