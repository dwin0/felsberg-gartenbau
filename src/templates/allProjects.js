import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'

import Layout from '../components/Layout'
import SingleProject from '../components/common/SingleProject'
import { ProjectsWrapper } from '../components/common/Projects'

const AllProjects = () => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(
          filter: { frontmatter: { templateKey: { eq: "projectPage" } } }
          sort: { fields: frontmatter___projectEnd, order: DESC }
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
    `}
    render={({ allMarkdownRemark: { edges } }) => (
      <Layout>
        <Layout.ContentWrapper>
          <h1>Alle Projekte</h1>
          <Link to="/projekte/tags">Filtern nach Stichwort</Link>
          <ProjectsWrapper>
            {edges.map(({ node }) => (
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
          <Link to="/projekte/tags">Alle Stichwörter</Link>
        </Layout.ContentWrapper>
      </Layout>
    )}
  />
)

export default AllProjects
