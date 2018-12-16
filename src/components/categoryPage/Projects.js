import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql, Link } from 'gatsby'
import Image from 'gatsby-image'

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
                tags
                shortDescription
                galleryImages {
                  image {
                    childImageSharp {
                      fixed(width: 350, height: 350) {
                        ...GatsbyImageSharpFixed_withWebp_tracedSVG
                      }
                    }
                  }
                }
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

      // TODO: move into separate component
      return allProjects.map(({ node }) => (
        <div key={node.fields.slug}>
          <Link to={node.fields.slug}>
            {/* TODO: add check for index 0 */}
            <Image
              fixed={
                node.frontmatter.galleryImages[0].image.childImageSharp.fixed
              }
            />
            <h2>{node.frontmatter.title}</h2>
          </Link>
          <p>{node.frontmatter.shortDescription}</p>
          <div>
            {node.frontmatter.tags.map(tag => (
              <Link key={tag} to={`projekte/tags/${tag.toLowerCase()}`}>
                {tag}
              </Link>
            ))}
          </div>
        </div>
      ))
    }}
  />
)

Projects.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Projects
