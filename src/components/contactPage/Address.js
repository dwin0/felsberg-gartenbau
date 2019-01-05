import React from 'react'
import PropTypes from 'prop-types'

import Link from '../common/Link'
import { Container, Text } from './AddressElements'

const Address = ({ address: { name, street, city, googleMapsLink } }) => (
  <Container>
    <Text>Unsere Adresse lautet:</Text>
    <address>
      <Link href={googleMapsLink} target="_blank" rel="noopener noreferrer">
        <span>{name}</span>
        <span>{street}</span>
        <span>{city}</span>
      </Link>
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
