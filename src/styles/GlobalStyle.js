import { createGlobalStyle } from 'styled-components'

import { FONTS } from './styleguide'

// https://www.styled-components.com/docs/api#createglobalstyle
const GlobalStyle = createGlobalStyle`
  body {
    font: ${FONTS.STANDARD_TEXT};
    max-width: 1000px;
    margin: auto;
  }
`

export default GlobalStyle
