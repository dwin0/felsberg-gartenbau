import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import SingleProject from '../components/common/SingleProject'
import { ProjectsWrapper } from '../components/common/Projects'

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `${totalCount} Projekt${
    totalCount === 1 ? '' : 'e'
  } mit dem Stichwort "${tag}"`

  return (
    <Layout>
      <Layout.ContentWrapper>
        <h1>{tagHeader}</h1>
        <ProjectsWrapper>
          {edges.map(({ node }) => {
            return (
              <SingleProject
                key={node.fields.slug}
                slug={node.fields.slug}
                title={node.frontmatter.title}
                images={node.frontmatter.galleryImages}
                shortDescription={node.frontmatter.shortDescription}
                tags={node.frontmatter.tags}
              />
            )
          })}
        </ProjectsWrapper>
        <Link to="/projekte/tags">All tags</Link>
      </Layout.ContentWrapper>
    </Layout>
  )
}

Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }).isRequired,
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
              tags: PropTypes.arrayOf(PropTypes.string.isRequired),
              shortDescription: PropTypes.string.isRequired,
              galleryImages: PropTypes.arrayOf(
                PropTypes.shape({
                  image: PropTypes.shape({
                    childImageSharp: PropTypes.shape({
                      fixed: PropTypes.object.isRequired,
                    }).isRequired,
                  }).isRequired,
                }),
              ),
            }),
          }),
        }).isRequired,
      ),
    }),
  }),
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      filter: {
        frontmatter: {
          tags: { in: [$tag] }
          templateKey: { eq: "projectPage" }
        }
      }
    ) {
      totalCount
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
`
