import { createGlobalStyle } from 'styled-components'

import { FONTS } from './styleguide'
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
    ${FONTS.MEDIUM_BOLD}
  }

  address {
    font-style: normal;
  }
`

export default GlobalStyle
