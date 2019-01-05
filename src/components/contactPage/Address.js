import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Link from '../common/Link'

export const Container = styled.div`
  text-align: center;
  margin-bottom: 100px;

  p {
    margin: 0 0 20px 0;
  }
`

const Address = ({ address: { name, street, city, googleMapsLink } }) => (
  <Container>
    <p>Unsere Adresse lautet:</p>
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
