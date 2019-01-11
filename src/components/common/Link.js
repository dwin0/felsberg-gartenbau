import styled, { css } from 'styled-components'
import { Link } from 'gatsby'

import { FONTS, COLORS } from '../../styles/styleguide'

export const LinkStyle = css`
  ${FONTS.STANDARD_TEXT_BOLD};
  text-decoration: none;
  color: ${COLORS.GREEN};
  display: flex;

  :hover {
    text-decoration: underline;
    cursor: pointer;
  }
`

export const ExternalLink = styled.a`
  ${LinkStyle};
  flex-direction: column;
`

export const GatsbyLink = styled(Link)`
  ${LinkStyle}
`
