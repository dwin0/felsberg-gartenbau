import { Link } from 'gatsby'
import styled from 'styled-components'

import { COLORS, FONTS } from '../../../styles/styleguide'

export const CategoryItem = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  background: ${COLORS.GREEN};
  color: ${COLORS.WHITE};
  width: 250px;
  height: 250px;
  border-radius: 50%;
  border: 10px solid ${COLORS.GREEN};

  :hover {
    background: ${COLORS.WHITE};
    color: ${COLORS.GREEN};
    border-bottom-color: ${COLORS.GREEN};
  }
`

export const CategoryItemText = styled.p`
  font: ${FONTS.LARGE_LINK};
  border-bottom-width: 5px;
  border-bottom-style: solid;
  padding-bottom: 5px;
`
