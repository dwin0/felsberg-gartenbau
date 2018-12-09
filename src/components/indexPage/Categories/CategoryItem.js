import { Link } from 'gatsby'
import styled from 'styled-components'

import { COLORS, FONTS } from '../../../styles/styleguide'

export const CategoryItem = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  background: ${COLORS.GREEN};
  width: 250px;
  height: 250px;
  border-radius: 50%;
  border: 10px solid ${COLORS.GREEN};
  position: relative;
  overflow: hidden;
`

export const CategoryItemText = styled.p`
  font: ${FONTS.LARGE_LINK};
  color: ${props => (props.hovered ? 'transparent' : COLORS.GREEN)};
  border-bottom-width: 5px;
  border-bottom-style: solid;
  padding-bottom: 5px;
  padding-left: 5px;
  z-index: 2;
`
