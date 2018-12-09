import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Categories from '../components/indexPage/Categories'

const IndexPage = ({ data }) => {
  const { title } = data.site.siteMetadata

  return (
    <Layout>
      <h1>{title}</h1>
      <Categories defaultCategory={data.markdownRemark} />
    </Layout>
  )
}

// id is provided by the context set in gatsby-node.js
export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
      }
      html
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }).isRequired,
      html: PropTypes.string.isRequired,
    }).isRequired,
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
}

export default IndexPage
