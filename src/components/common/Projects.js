import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
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

const Projects = ({ projects }) => {
  const {
    allMarkdownRemark: { edges },
  } = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { frontmatter: { templateKey: { eq: "projectPage" } } }
        sort: { frontmatter: { projectEnd: DESC } }
      ) {
        edges {
          node {
            fields {
              slug
            }
            ...FrontmatterProjectInformation
          }
        }
      }
    }
  `)

  return (
    <Fragment>
      <Subtitle>Projekte</Subtitle>
      <ProjectsWrapper>
        {edges
          .filter(({ node }) => projects.includes(node.frontmatter.title))
          .map(
            ({
              node: {
                fields: { slug },
                frontmatter: { title, mainImage, shortDescription, tags },
              },
            }) => (
              <SingleProject
                key={slug}
                slug={slug}
                title={title}
                mainImage={mainImage}
                shortDescription={shortDescription}
                tags={tags}
              />
            ),
          )}
      </ProjectsWrapper>
    </Fragment>
  )
}

Projects.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Projects
