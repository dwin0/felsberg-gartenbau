import { createGlobalStyle } from 'styled-components'

import { FONTS } from './styleguide'

// https://www.styled-components.com/docs/api#createglobalstyle
const GlobalStyle = createGlobalStyle`
  body {
    ${FONTS.STANDARD_TEXT};
    margin: auto;
    margin-bottom: 200px /* TODO: remove */
  }

  h1 {
    ${FONTS.LARGE}
  }
`

export default GlobalStyle
