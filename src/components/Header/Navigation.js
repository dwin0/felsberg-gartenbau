import { Link } from 'gatsby'
import styled from 'styled-components'

import { COLORS } from '../../styles/styleguide'

export const Navigation = styled.nav`
  display: flex;
  height: 100%;
`
export const NavigationEntry = styled(Link)`
  color: ${COLORS.BLACK};
  text-decoration: none;
  display: flex;
  align-items: center;
  padding: 0 20px;
  border-left: 1px solid ${COLORS.BLACK_TRANSPARENT};

  :hover {
    margin-bottom: -3px;
    border-bottom: 3px solid ${COLORS.GREEN};
  }
`
