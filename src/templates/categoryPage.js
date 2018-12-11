import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Image from 'gatsby-image'

import Layout from '../components/layout'
import ContentWrapper from '../components/ContentWrapper'

const CategoryPage = ({ data }) => {
  const { title, image } = data.markdownRemark.frontmatter

  return (
    <Layout>
      <h1>{title}</h1>
      <Image fluid={image.childImageSharp.fluid} />

      <ContentWrapper>
        <p>Welcome to page 2</p>
        <Link to="/">Go back to the homepage</Link>
      </ContentWrapper>
    </Layout>
  )
}

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
    }
  }
`

CategoryPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.shape({
        title: PropTypes.string.isRequired,
        image: PropTypes.object.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
}

export default CategoryPage
