import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? '' : 's'
  } tagged with "${tag}"`

  return (
    <Layout>
      <Layout.ContentWrapper>
        <h1>{tagHeader}</h1>
        <ul>
          {edges.map(({ node }) => {
            const { title } = node.frontmatter
            const { slug } = node.fields
            return (
              <li key={slug}>
                <Link to={slug}>{title}</Link>
              </li>
            )
          })}
        </ul>
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
    allMarkdownRemark(filter: { frontmatter: { tags: { in: [$tag] } } }) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
