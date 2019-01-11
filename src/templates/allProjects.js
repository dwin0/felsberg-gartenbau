import React, { Fragment } from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'

import { FiFilter } from 'react-icons/fi'

import Layout from '../components/Layout'
import SingleProject from '../components/common/SingleProject'
import ProjectSearch from '../components/common/ProjectSearch'

const Wrapper = styled.div`
  display: flex;
`

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
          <Link to="/projekte/tags">
            <FiFilter />
            &nbsp; Filtern nach Stichwort
          </Link>

          <ProjectSearch projects={edges}>
            {({ filteredProjects, SearchField }) => (
              <Fragment>
                {SearchField}
                <Wrapper>
                  {filteredProjects.map(
                    ({
                      node: {
                        fields: { slug },
                        frontmatter: {
                          title,
                          mainImage,
                          shortDescription,
                          tags,
                        },
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
                </Wrapper>
              </Fragment>
            )}
          </ProjectSearch>

          <Link to="/projekte/tags">Alle Stichwörter</Link>
          <p>Suchfeld nach Name</p>
        </Layout.ContentWrapper>
      </Layout>
    )}
  />
)

export default AllProjects
