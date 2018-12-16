import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Image from 'gatsby-image'

import Layout from '../components/Layout'
import CMS_HTML from '../components/CMS_Html'
import Projects from '../components/categoryPage/Projects'

const CategoryPage = ({ data: { markdownRemark } }) => {
  const { image, projects } = markdownRemark.frontmatter
  const { html } = markdownRemark

  return (
    <Layout>
      <Image fluid={image.childImageSharp.fluid} />

      <Layout.ContentWrapper>
        <CMS_HTML dangerouslySetInnerHTML={{ __html: html }} />
        {projects && projects.length && <Projects projects={projects} />}
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
        projects
      }
      html
    }
  }
`

CategoryPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.shape({
        image: PropTypes.object.isRequired,
        projects: PropTypes.arrayOf(PropTypes.string),
      }).isRequired,
      html: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
}

export default CategoryPage
