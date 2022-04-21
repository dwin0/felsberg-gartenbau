import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import { ImageTitleWrapper, Title } from '../components/indexPage/Title'
import Categories from '../components/indexPage/Categories'
import CMS_HTML from '../components/common/CMS_Html'
import HeaderImage from '../components/common/HeaderImage'

const IndexPage = ({ data }) => {
  const { title } = data.site.siteMetadata
  const { image } = data.markdownRemark.frontmatter
  const { html } = data.markdownRemark

  return (
    <Layout>
      <ImageTitleWrapper>
        <HeaderImage image={image.childImageSharp.gatsbyImageData} alt="" />
        <Title>{title}</Title>
      </ImageTitleWrapper>

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
        title
        image {
          childImageSharp {
            gatsbyImageData(
              layout: FULL_WIDTH
              formats: [AUTO, WEBP]
              placeholder: TRACED_SVG
            )
          }
        }
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
        image: PropTypes.object.isRequired,
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
