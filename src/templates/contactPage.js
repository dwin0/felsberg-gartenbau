import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Address, { addressPropTypes } from '../components/contactPage/Address'
import FurtherAddressInformation, {
  furtherAdressInformationPropTypes,
} from '../components/contactPage/FurtherAddressInformation'
import ContactForm from '../components/contactPage/ContactForm'

export { Head } from '../components/Layout/Helmet'
import Layout from '../components/Layout'
import CMS_HTML from '../components/common/CMS_Html'
import HeaderImage from '../components/common/HeaderImage'

const ContactPage = ({
  data: {
    markdownRemark: {
      html,
      frontmatter: { image, imageAlt, address, furtherAdressInformation },
    },
  },
}) => (
  <Layout>
    <HeaderImage image={image.childImageSharp.gatsbyImageData} alt={imageAlt} />

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
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
        imageAlt
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
        title
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
        imageAlt: PropTypes.string.isRequired,
        address: addressPropTypes,
        furtherAdressInformation: furtherAdressInformationPropTypes,
        title: PropTypes.string.isRequired, // Used in Head
      }).isRequired,
      html: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
}

export default ContactPage
