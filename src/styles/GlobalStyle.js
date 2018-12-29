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
