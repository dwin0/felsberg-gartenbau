import { Link } from 'gatsby'
import styled from 'styled-components'

import { COLORS, FONTS } from '../../styles/styleguide'

const Logo = styled(Link)`
  ${FONTS.LOGO_FONT}
  color: ${COLORS.GREEN};
  text-decoration: none;
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 20px;
  border-right: 1px solid ${COLORS.BLACK_TRANSPARENT};
`

export default Logo
