import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql, Link } from 'gatsby'

const Projects = ({ projects }) => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(
          filter: { frontmatter: { templateKey: { eq: "projectPage" } } }
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `}
    render={({ allMarkdownRemark: { edges } }) => {
      const allProjects = edges.filter(({ node }) =>
        projects.includes(node.frontmatter.title),
      )

      return allProjects.map(({ node }) => (
        <div key={node.fields.slug}>
          <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
        </div>
      ))
    }}
  />
)

Projects.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Projects
