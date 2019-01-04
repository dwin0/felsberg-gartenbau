import styled from 'styled-components'
import { COLORS, FONTS } from '../../styles/styleguide'

import { media, BREAKPOINTS } from '../../styles/styleguide'

export const FooterElement = styled.footer`
  ${FONTS.FOOTER}
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: ${COLORS.GREEN};
  color: ${COLORS.WHITE};
  padding: 50px 0;
`

export const Address = styled.address`
  ${media.lessThan(BREAKPOINTS.MEDIUM_MINUS_ONE)`
    display: flex;
    flex-direction: column;
    align-items: center;
  `}
`

export const AddressItem = styled.span`
  ${media.greaterThan(BREAKPOINTS.MEDIUM)`
    :not(:first-child)::before {
      content: '|';
      padding: 0 10px;
    }
  `}
`

export const FooterLink = styled.a`
  text-decoration: none;
  color: ${COLORS.WHITE};

  ${media.lessThan(BREAKPOINTS.MEDIUM_MINUS_ONE)`
    padding: 10px 0;
  `}

  ${media.greaterThan(BREAKPOINTS.MEDIUM)`
    padding: 5px 0;
  `}
`
