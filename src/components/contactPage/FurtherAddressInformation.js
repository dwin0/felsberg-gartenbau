import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Container } from './Address'
import { FONTS, COLORS } from '../../styles/styleguide'

const AddressLink = styled.a`
  ${FONTS.STANDARD_TEXT_BOLD};
  text-decoration: none;
  color: ${COLORS.GREEN};

  :hover {
    text-decoration: underline;
  }
`

export const linkPrefixes = {
  tel: 'tel:',
  email: 'mailto:',
  link: '',
}

const FurtherAddressInformation = ({ furtherAdressInformation }) => (
  <Container>
    <p>Weitere Kontaktangaben:</p>
    {furtherAdressInformation.map(addressInfo => (
      <p key={addressInfo.contactInfo}>
        <span>{addressInfo.name}:&nbsp;</span>
        <AddressLink
          href={`${linkPrefixes[addressInfo.type]}${addressInfo.contactInfo}`}
        >
          {addressInfo.contactInfo}
        </AddressLink>
      </p>
    ))}
  </Container>
)

export const furtherAdressInformationPropTypes = {
  furtherAdressInformation: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      contactInfo: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
    }),
  ).isRequired,
}

FurtherAddressInformation.propTypes = {
  ...furtherAdressInformationPropTypes,
}

export default FurtherAddressInformation
