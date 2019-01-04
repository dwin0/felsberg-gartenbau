import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import isEmpty from 'lodash/fp/isEmpty'

import Layout from '../components/Layout'
import CMS_HTML from '../components/common/CMS_Html'
import HeaderImage from '../components/common/HeaderImage'
import Projects from '../components/common/Projects'

const CategoryPage = ({
  data: {
    markdownRemark: {
      html,
      frontmatter: { image, projects },
    },
  },
}) => (
  <Layout>
    <HeaderImage fluid={image.childImageSharp.fluid} />

    <Layout.ContentWrapper>
      <CMS_HTML dangerouslySetInnerHTML={{ __html: html }} />
      {!isEmpty(projects) && <Projects projects={projects} />}
    </Layout.ContentWrapper>
  </Layout>
)

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
