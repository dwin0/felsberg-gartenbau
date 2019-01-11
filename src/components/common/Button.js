import { css } from 'styled-components'

import { COLORS } from '../../styles/styleguide'

export const buttonStyle = css`
  display: flex;
  width: 200px;
  height: 40px;
  justify-content: center;
  align-items: center;
  text-decoration: none;

  color: ${COLORS.GREEN};
  border: ${COLORS.GREEN} 2px solid;
  background: ${COLORS.WHITE};

  :hover,
  :not(&:disabled) {
    background: ${COLORS.GREEN};
    color: ${COLORS.WHITE};
    transition-property: background, color;
    transition-duration: 0.4s;
    transition-timing-function: ease;
  }
`
