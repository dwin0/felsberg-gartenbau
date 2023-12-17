import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

export { Head } from '../components/Layout/Helmet'
import Layout from '../components/Layout'
import Categories from '../components/indexPage/Categories'
import CMS_HTML from '../components/common/CMS_Html'
import HeaderImage from '../components/common/HeaderImage'

const IndexPage = ({ data }) => {
  const { image, imageAlt } = data.markdownRemark.frontmatter
  const { html } = data.markdownRemark

  return (
    <Layout>
      <HeaderImage
        image={image.childImageSharp.gatsbyImageData}
        alt={imageAlt}
        objectPosition="50% 80%"
      />

      <Layout.ContentWrapper>
        <CMS_HTML dangerouslySetInnerHTML={{ __html: html }} />
        <Categories />
      </Layout.ContentWrapper>
    </Layout>
  )
}

// id is provided by the context set in gatsby-node.js
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
      }
      html
    }
  }
`

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.shape({
        image: PropTypes.object.isRequired,
        imageAlt: PropTypes.string.isRequired,
      }).isRequired,
      html: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
}

export default IndexPage
