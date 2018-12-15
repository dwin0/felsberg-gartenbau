import { createGlobalStyle } from 'styled-components'

import { FONTS } from './styleguide'

// https://www.styled-components.com/docs/api#createglobalstyle
const GlobalStyle = createGlobalStyle`
  body {
    ${FONTS.STANDARD_TEXT};
    margin: auto;
  }

  h1 {
    ${FONTS.LARGE}
  }
`

export default GlobalStyle
