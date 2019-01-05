import styled from 'styled-components'

import { FONTS } from '../../styles/styleguide'
import { LinkStyle } from './Link'

const CMS_HTML = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto;

  h1 {
    margin: 20px 0;
  }

  h2 {
    margin: 100px 0 20px 0;
  }

  p {
    margin-bottom: 40px;
  }

  a {
    ${LinkStyle};
    display: inline;
  }

  strong,
  b {
    ${FONTS.STANDARD_TEXT_BOLD};
  }

  img {
    max-width: 100%;
  }
`

export default CMS_HTML
