import React, { Fragment } from 'react'
import { graphql, StaticQuery } from 'gatsby'
import { FiFilter } from 'react-icons/fi'

import Layout from '../components/Layout'
import SingleProject from '../components/common/SingleProject'
import ProjectSearch from '../components/allProjects/ProjectSearch'
import { TagsLink, AllProjectsWrapper } from '../components/allProjects'

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

          <ProjectSearch projects={edges}>
            {({ filteredProjects, SearchField }) => (
              <Fragment>
                {SearchField}

                <TagsLink to="/projekte/tags">
                  <FiFilter />
                  &nbsp; Filtern nach Stichwort
                </TagsLink>

                <AllProjectsWrapper>
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
                </AllProjectsWrapper>
              </Fragment>
            )}
          </ProjectSearch>
        </Layout.ContentWrapper>
      </Layout>
    )}
  />
)

export default AllProjects
