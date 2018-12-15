import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Image from 'gatsby-image'

import Address, { addressPropTypes } from '../components/contactPage/Address'
import FurtherAddressInformation, {
  furtherAdressInformationPropTypes,
} from '../components/contactPage/FurtherAddressInformation'

import Layout from '../components/Layout'
import CMS_HTML from '../components/CMS_Html'

const ContactPage = ({ data: { markdownRemark } }) => {
  const {
    image,
    address,
    furtherAdressInformation,
  } = markdownRemark.frontmatter
  const { html } = markdownRemark

  return (
    <Layout>
      <Image fluid={image.childImageSharp.fluid} />

      <Layout.ContentWrapper>
        <CMS_HTML dangerouslySetInnerHTML={{ __html: html }} />
        <Address address={address} />
        {furtherAdressInformation && (
          <FurtherAddressInformation
            furtherAdressInformation={furtherAdressInformation}
          />
        )}
      </Layout.ContentWrapper>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        image {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
        address {
          name
          street
          city
          googleMapsLink
        }
        furtherAdressInformation {
          name
          contactInfo
          type
        }
      }
      html
    }
  }
`

ContactPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.shape({
        image: PropTypes.object.isRequired,
        ...addressPropTypes,
        ...furtherAdressInformationPropTypes,
      }).isRequired,
      html: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
}

export default ContactPage
