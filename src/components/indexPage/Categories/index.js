import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import HoverHandler from '../../helper/HoverHandler'
import CategoryContainer from './CategoryContainer'
import { CategoryItem, CategoryItemText } from './CategoryItem'
import CategoryText from './CategoryText'

const Categories = ({ defaultCategory }) => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(
          filter: { frontmatter: { categoryOnHomepage: { eq: true } } }
          sort: { fields: frontmatter___categoryOnHomepageOrder, order: ASC }
        ) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                title
                categoryOnHomepage
              }
              html
            }
          }
        }
      }
    `}
    render={({ allMarkdownRemark }) => (
      <HoverHandler defaultItem={defaultCategory}>
        {({ hoveredItem: hoveredCategory, handleHover, handleUnhover }) => (
          <>
            <CategoryText
              title={hoveredCategory.frontmatter.title}
              html={hoveredCategory.html}
            />

            <CategoryContainer>
              {allMarkdownRemark.edges.map(({ node }) => (
                <CategoryItem
                  to={node.fields.slug}
                  key={node.frontmatter.title}
                  onMouseEnter={() => handleHover(node)}
                  onMouseLeave={() => handleUnhover()}
                >
                  <CategoryItemText>{node.frontmatter.title}</CategoryItemText>
                </CategoryItem>
              ))}
            </CategoryContainer>
          </>
        )}
      </HoverHandler>
    )}
  />
)

Categories.propTypes = {
  defaultCategory: PropTypes.shape({
    frontmatter: PropTypes.shape({
      title: PropTypes.string.isRequired,
    }).isRequired,
    html: PropTypes.string.isRequired,
  }).isRequired,
}

export default Categories
