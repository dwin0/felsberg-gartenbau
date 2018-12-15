import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { FONTS, COLORS } from '../../styles/styleguide'

export const Container = styled.div`
  text-align: center;
  margin-bottom: 100px;

  p {
    margin: 0 0 20px 0;
  }
`

const AddressLink = styled.a`
  ${FONTS.STANDARD_TEXT_BOLD};
  text-decoration: none;
  color: ${COLORS.GREEN};
  display: flex;
  flex-direction: column;

  :hover {
    text-decoration: underline;
  }
`

const Address = ({ address: { name, street, city, googleMapsLink } }) => (
  <Container>
    <p>Unsere Adresse lautet:</p>
    <address>
      <AddressLink href={googleMapsLink}>
        <span>{name}</span>
        <span>{street}</span>
        <span>{city}</span>
      </AddressLink>
    </address>
  </Container>
)

export const addressPropTypes = {
  address: PropTypes.shape({
    name: PropTypes.string.isRequired,
    street: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    googleMapsLink: PropTypes.string.isRequired,
  }).isRequired,
}

Address.propTypes = {
  ...addressPropTypes,
}

export default Address
