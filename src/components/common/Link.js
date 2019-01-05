import styled, { css } from 'styled-components'

import { FONTS, COLORS } from '../../styles/styleguide'

export const LinkStyle = css`
  ${FONTS.STANDARD_TEXT_BOLD};
  text-decoration: none;
  color: ${COLORS.GREEN};
  display: flex;
  flex-direction: column;

  :hover {
    text-decoration: underline;
  }
`

const Link = styled.a`
  ${LinkStyle}
`

export default Link
