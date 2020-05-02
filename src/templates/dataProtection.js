import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import CMS_HTML from '../components/common/CMS_Html'

const DataProtection = ({
  data: {
    markdownRemark: { html },
  },
}) => (
  <Layout>
    <Layout.ContentWrapper>
      <CMS_HTML dangerouslySetInnerHTML={{ __html: html }} />
    </Layout.ContentWrapper>
  </Layout>
)

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
    }
  }
`

DataProtection.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      html: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
}

export default DataProtection
