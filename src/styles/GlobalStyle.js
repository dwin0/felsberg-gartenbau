import { createGlobalStyle } from 'styled-components'

import { COLORS } from './styleguide'

// https://www.styled-components.com/docs/api#createglobalstyle
const GlobalStyle = createGlobalStyle`
  body {
    font-family: sans-serif;
    color: ${COLORS.GREEN};
  }
`

export default GlobalStyle
