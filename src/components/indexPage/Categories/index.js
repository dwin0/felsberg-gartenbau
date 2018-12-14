import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import CategoryLink from './CategoryLink'
import CategoryTitle from './CategoryTitle'
import CategoryImage from './CategoryImage'

const Categories = () => (
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
                    fixed(width: 250, height: 250) {
                      ...GatsbyImageSharpFixed_withWebp_tracedSVG
                    }
                  }
                }
                shortDescription
              }
            }
          }
        }
      }
    `}
    render={({ allMarkdownRemark }) =>
      allMarkdownRemark.edges
        .sort(
          (edgeA, edgeB) =>
            edgeA.node.frontmatter.categoryOnHomepage.order -
            edgeB.node.frontmatter.categoryOnHomepage.order,
        )
        .map(
          ({
            node: {
              frontmatter: { title, image, shortDescription },
              fields: { slug },
            },
          }) => (
            <div key={title}>
              <CategoryImage fixed={image.childImageSharp.fixed} />
              <div>
                <CategoryTitle>{title}</CategoryTitle>
                <p>{shortDescription}</p>
                <CategoryLink as="button" to={slug}>
                  Mehr
                </CategoryLink>
              </div>
            </div>
          ),
        )
    }
  />
)

export default Categories
