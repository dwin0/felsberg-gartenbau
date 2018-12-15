import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Image from 'gatsby-image'

import Layout from '../components/Layout'
import { ImageTitleWrapper, Title } from '../components/indexPage/Title'
import Categories from '../components/indexPage/Categories'
import CMS_HTML from '../components/CMS_Html'

const IndexPage = ({ data }) => {
  const { title } = data.site.siteMetadata
  const { image } = data.markdownRemark.frontmatter
  const { html } = data.markdownRemark

  return (
    <Layout>
      <ImageTitleWrapper>
        <Image fluid={image.childImageSharp.fluid} />
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
// TODO: extrace headerImageQuery to separate Fragement and create PropTypes check
export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
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
        title: PropTypes.string.isRequired,
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
