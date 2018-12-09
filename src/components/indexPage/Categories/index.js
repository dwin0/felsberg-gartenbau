import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import HoverHandler from '../../helper/HoverHandler'
import CategoryContainer from './CategoryContainer'
import { CategoryItem, CategoryItemText } from './CategoryItem'
import CategoryText from './CategoryText'

const Categories = ({ defaultCategory }) => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(
          filter: {
            frontmatter: { categoryOnHomepage: { visible: { eq: true } } }
          }
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                categoryOnHomepage {
                  order
                }
                image {
                  childImageSharp {
                    sizes(maxWidth: 630) {
                      ...GatsbyImageSharpSizes
                    }
                  }
                }
              }
              html
            }
          }
        }
      }
    `}
    render={({ allMarkdownRemark }) => (
      <HoverHandler
        defaultItem={defaultCategory}
        onClick={window.console.log(allMarkdownRemark)}
      >
        {({ hoveredItem: hoveredCategory, handleHover, handleUnhover }) => (
          <>
            <CategoryText
              title={hoveredCategory.frontmatter.title}
              html={hoveredCategory.html}
            />

            <CategoryContainer>
              {allMarkdownRemark.edges
                .sort(
                  (edgeA, edgeB) =>
                    edgeA.node.frontmatter.categoryOnHomepage.order -
                    edgeB.node.frontmatter.categoryOnHomepage.order,
                )
                .map(({ node }) => (
                  <CategoryItem
                    to={node.fields.slug}
                    key={node.frontmatter.title}
                    onMouseEnter={() => handleHover(node)}
                    onMouseLeave={() => handleUnhover()}
                  >
                    {/* <Img fixed={file.childImageSharp.fixed} /> */}
                    <CategoryItemText>
                      {node.frontmatter.title}
                    </CategoryItemText>
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
