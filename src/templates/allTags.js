import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
  },
}) => (
  <div>
    <h1>Tags</h1>
    <ul>
      {group.map(tag => (
        <li key={tag.fieldValue}>
          <Link to={`projekte/tags/${tag.fieldValue.toLowerCase()}/`}>
            {tag.fieldValue} ({tag.totalCount})
          </Link>
        </li>
      ))}
    </ul>
  </div>
)

TagsPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired,
      ),
    }),
  }),
}

export default TagsPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
