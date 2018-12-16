import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import { linkPrefixes } from '../contactPage/FurtherAddressInformation'
import FooterElement from './FooterElement'
import FooterLink from './FooterLink'

const Footer = () => (
  <StaticQuery
    query={graphql`
      query {
        markdownRemark(frontmatter: { title: { eq: "Kontakt" } }) {
          frontmatter {
            address {
              name
              street
              city
            }
            furtherAdressInformation {
              contactInfo
              name
              type
            }
          }
        }
      }
    `}
    render={({
      markdownRemark: {
        frontmatter: { address, furtherAdressInformation },
      },
    }) => (
      <FooterElement>
        <address>
          {Object.values(address).map((addressLine, index) => (
            <span key={addressLine}>
              {index !== 0 && ' | '}
              {addressLine}
            </span>
          ))}
        </address>
        <div>
          {furtherAdressInformation.map(addressInfo => (
            <p key={addressInfo.contactInfo}>
              {addressInfo.name}:&nbsp;
              <FooterLink
                href={`${linkPrefixes[addressInfo.type]}${
                  addressInfo.contactInfo
                }`}
              >
                {addressInfo.contactInfo}
              </FooterLink>
            </p>
          ))}
        </div>
      </FooterElement>
    )}
  />
)

export default Footer
