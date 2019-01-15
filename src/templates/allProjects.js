import React, { Fragment } from 'react'
import { graphql, StaticQuery } from 'gatsby'
import { FiFilter } from 'react-icons/fi'

import Layout from '../components/Layout'
import SingleProject from '../components/common/SingleProject'
import Search from '../components/common/Search'
import { AllProjectsWrapper } from '../components/allProjects'
import { TagsLink } from '../components/common/Link'

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

          <Search
            collection={edges}
            filterBy={({ node: project }) => project.frontmatter.title}
            placeholder="Projektname"
          >
            {({ filteredCollection, SearchField }) => (
              <Fragment>
                {SearchField}

                <TagsLink to="/projekte/tags/">
                  <FiFilter />
                  &nbsp; Filtern nach Stichwort
                </TagsLink>

                <AllProjectsWrapper>
                  {filteredCollection.map(
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
          </Search>
        </Layout.ContentWrapper>
      </Layout>
    )}
  />
)

export default AllProjects
