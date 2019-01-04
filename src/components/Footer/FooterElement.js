import styled from 'styled-components'
import { COLORS, FONTS } from '../../styles/styleguide'

const FooterElement = styled.footer`
  ${FONTS.SMALL}
  padding: 50px 0;
  background: ${COLORS.GREEN};
  color: ${COLORS.WHITE};
  text-align: center;

  p,
  address {
    margin: 10px 0;
  }
`

export default FooterElement
