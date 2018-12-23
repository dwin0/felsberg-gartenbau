import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import SingleProject from './SingleProject'

const ProjectsWrapper = styled.div`
  display: flex;
  justify-content: center;
  max-width: 1000px;
  margin: auto;
`

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
    render={({ allMarkdownRemark: { edges } }) => (
      <ProjectsWrapper>
        {edges
          .filter(({ node }) => projects.includes(node.frontmatter.title))
          .map(({ node }) => (
            <SingleProject
              key={node.fields.slug}
              slug={node.fields.slug}
              title={node.frontmatter.title}
              images={node.frontmatter.galleryImages}
              shortDescription={node.frontmatter.shortDescription}
              tags={node.frontmatter.tags}
            />
          ))}
      </ProjectsWrapper>
    )}
  />
)

Projects.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Projects
