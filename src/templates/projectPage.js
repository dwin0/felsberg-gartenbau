import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'

import Layout from '../components/Layout'
import CMS_HTML from '../components/CMS_Html'

const ProjectPage = ({ data: { markdownRemark } }) => {
  const { tags } = markdownRemark.frontmatter
  const { html } = markdownRemark

  // window.console.log(markdownRemark)
  // TODO: add https://jossmac.github.io/react-images/

  return (
    <Layout>
      <Layout.ContentWrapper>
        <CMS_HTML dangerouslySetInnerHTML={{ __html: html }} />
        {tags.map(tag => (
          <Link key={tag} to={`projekte/tags/${tag.toLowerCase()}`}>
            {tag}
          </Link>
        ))}
      </Layout.ContentWrapper>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        tags
        galleryImages {
          description
          image {
            childImageSharp {
              fixed(width: 350, height: 350) {
                ...GatsbyImageSharpFixed_withWebp_tracedSVG
              }
            }
          }
        }
      }
      html
    }
  }
`

ProjectPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
}

export default ProjectPage
