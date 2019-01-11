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
              ...FrontmatterProjectInformation
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
            {edges.map(
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
          <Link to="/projekte/tags">Alle Stichwörter</Link>
          <p>Suchfeld nach Name</p>
        </Layout.ContentWrapper>
      </Layout>
    )}
  />
)

export default AllProjects
