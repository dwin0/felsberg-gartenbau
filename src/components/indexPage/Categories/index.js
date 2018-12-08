import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import HoverHandler from '../../helper/HoverHandler'
import CategoryContainer from './CategoryContainer'
import CategoryItem from './CategoryItem'

const Categories = ({ defaultCategory }) => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark {
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
    render={({ allMarkdownRemark }) => {
      const categoriesOnHomePage = allMarkdownRemark.edges.filter(
        ({ node }) => node.frontmatter.categoryOnHomepage,
      )

      return (
        <HoverHandler defaultItem={defaultCategory}>
          {({ hoveredItem: hoveredCategory, handleHover, handleUnhover }) => (
            <>
              <div>
                <h1>{hoveredCategory.frontmatter.title}</h1>
                <div
                  dangerouslySetInnerHTML={{ __html: hoveredCategory.html }}
                />
              </div>

              <CategoryContainer>
                {categoriesOnHomePage.map(({ node }) => (
                  <CategoryItem
                    to={node.fields.slug}
                    key={node.frontmatter.title}
                    onMouseEnter={() => handleHover(node)}
                    onMouseLeave={() => handleUnhover()}
                  >
                    {node.frontmatter.title}
                  </CategoryItem>
                ))}
              </CategoryContainer>
            </>
          )}
        </HoverHandler>
      )
    }}
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
