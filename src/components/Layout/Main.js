import styled from 'styled-components'

import { HEADER_HEIGHT, SPACE_ABOVE_FOOTER } from '../../styles/constants'

const Main = styled.main`
  min-height: calc(100vh - ${HEADER_HEIGHT} - ${SPACE_ABOVE_FOOTER});
  margin-bottom: ${SPACE_ABOVE_FOOTER};
`

export default Main
