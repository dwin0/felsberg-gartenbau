import { createGlobalStyle } from 'styled-components'

import { COLORS, FONTS } from './styleguide'

// https://www.styled-components.com/docs/api#createglobalstyle
const GlobalStyle = createGlobalStyle`
  body {
    font: ${FONTS.STANDARD_TEXT};
    color: ${COLORS.GREEN};
  }
`

export default GlobalStyle
