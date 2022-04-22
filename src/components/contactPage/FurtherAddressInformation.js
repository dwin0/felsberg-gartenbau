import React from 'react'
import PropTypes from 'prop-types'

import {
  Container,
  FurtherAddressLink,
  Text,
  List,
  ListItem,
} from './AddressElements'
import { linkPrefixes } from './constants'

const FurtherAddressInformation = ({ furtherAdressInformation }) => (
  <Container>
    <Text>Weitere Kontaktangaben:</Text>
    <List>
      {furtherAdressInformation.map((addressInfo) => (
        <ListItem key={addressInfo.contactInfo}>
          <span>{addressInfo.name}:&nbsp;</span>
          <FurtherAddressLink
            href={`${linkPrefixes[addressInfo.type]}${addressInfo.contactInfo}`}
          >
            {addressInfo.contactInfo}
          </FurtherAddressLink>
        </ListItem>
      ))}
    </List>
  </Container>
)

export const furtherAdressInformationPropTypes = PropTypes.arrayOf(
  PropTypes.shape({
    name: PropTypes.string.isRequired,
    contactInfo: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }),
).isRequired

FurtherAddressInformation.propTypes = {
  furtherAdressInformation: furtherAdressInformationPropTypes,
}

export default FurtherAddressInformation
