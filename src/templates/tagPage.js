import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { FiTag } from 'react-icons/fi'

import Layout from '../components/Layout'
import SingleProject from '../components/common/SingleProject'
import Search from '../components/common/Search'
import { AllProjectsWrapper } from '../components/allProjects'
import { TagsLink } from '../components/common/Link'

const Tags = ({
  pageContext: { tag },
  data: {
    allMarkdownRemark: { edges, totalCount },
  },
}) => (
  <Layout>
    <Layout.ContentWrapper>
      <h1>{`${totalCount} Projekt${
        totalCount === 1 ? '' : 'e'
      } mit dem Stichwort "${tag}"`}</h1>

      <Search
        collection={edges}
        filterBy={({ node: project }) => project.frontmatter.title}
        placeholder="Projektname"
      >
        {({ filteredCollection, SearchField }) => (
          <Fragment>
            {SearchField}

            <TagsLink to="/projekte/tags/">
              <FiTag />
              &nbsp; Alle Stichwörter
            </TagsLink>

            <AllProjectsWrapper>
              {filteredCollection.map(
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
            </AllProjectsWrapper>
          </Fragment>
        )}
      </Search>
    </Layout.ContentWrapper>
  </Layout>
)

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
              mainImage: PropTypes.shape({
                childImageSharp: PropTypes.shape({
                  gatsbyImageData: PropTypes.object.isRequired,
                }).isRequired,
              }).isRequired,
            }),
          }),
        }).isRequired,
      ),
    }),
  }),
}

export default Tags

export const pageQuery = graphql`
  query ($tag: String) {
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
          ...FrontmatterProjectInformation
        }
      }
    }
  }
`
