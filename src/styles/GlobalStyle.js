import { createGlobalStyle } from 'styled-components'

import { FONTS, COLORS } from './styleguide'
import { HEADER_HEIGHT } from './constants'

// https://www.styled-components.com/docs/api#createglobalstyle
const GlobalStyle = createGlobalStyle`
  body {
    ${FONTS.STANDARD_TEXT};
    margin: auto;
    padding-top: ${HEADER_HEIGHT};
  }

  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
  }

  h1 {
    ${FONTS.LARGE}
  }

  h2 {
    ${FONTS.MEDIUM}
  }

  button {
    cursor: pointer;
    border: none;
    padding: 10px 15px;

    &:hover {
      background: ${COLORS.GREEN};
      color: ${COLORS.WHITE};
    }
  }

  address {
    font-style: normal;
  }

  ::selection {
    background: ${COLORS.YELLOW};
  }
`

export default GlobalStyle
