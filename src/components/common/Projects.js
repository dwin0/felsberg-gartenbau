import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import SingleProject from './SingleProject'
import Subtitle from './Subtitle'
import { media, BREAKPOINTS } from '../../styles/styleguide'

export const ProjectsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  ${media.lessThan(BREAKPOINTS.MEDIUM_MINUS_ONE)`
    max-width: 500px;
    margin: auto;
  `}
`

const Projects = ({ projects }) => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(
          filter: { frontmatter: { templateKey: { eq: "projectPage" } } }
          sort: { fields: frontmatter___projectEnd, order: DESC }
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
      <Fragment>
        <Subtitle>Projekte</Subtitle>
        <ProjectsWrapper>
          {edges
            .filter(({ node }) => projects.includes(node.frontmatter.title))
            .map(
              ({
                node: {
                  fields: { slug },
                  frontmatter: { title, galleryImages, shortDescription, tags },
                },
              }) => (
                <SingleProject
                  key={slug}
                  slug={slug}
                  title={title}
                  images={galleryImages}
                  shortDescription={shortDescription}
                  tags={tags}
                />
              ),
            )}
        </ProjectsWrapper>
      </Fragment>
    )}
  />
)

Projects.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Projects
