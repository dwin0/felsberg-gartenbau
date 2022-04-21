import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Address, { addressPropTypes } from '../components/contactPage/Address'
import FurtherAddressInformation, {
  furtherAdressInformationPropTypes,
} from '../components/contactPage/FurtherAddressInformation'
import ContactForm from '../components/contactPage/ContactForm'

import Layout from '../components/Layout'
import CMS_HTML from '../components/common/CMS_Html'
import HeaderImage from '../components/common/HeaderImage'

const ContactPage = ({
  data: {
    markdownRemark: {
      html,
      frontmatter: { image, address, furtherAdressInformation },
    },
  },
}) => (
  <Layout>
    <HeaderImage fluid={image.childImageSharp.fluid} />

    <Layout.ContentWrapper>
      <CMS_HTML dangerouslySetInnerHTML={{ __html: html }} />
      <Address address={address} />
      {furtherAdressInformation && (
        <FurtherAddressInformation
          furtherAdressInformation={furtherAdressInformation}
        />
      )}
      <ContactForm />
    </Layout.ContentWrapper>
  </Layout>
)

export const pageQuery = graphql`
  query ($id: String!) {
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
        address: addressPropTypes,
        furtherAdressInformation: furtherAdressInformationPropTypes,
      }).isRequired,
      html: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
}

export default ContactPage
