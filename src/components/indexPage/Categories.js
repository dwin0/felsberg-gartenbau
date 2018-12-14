import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Category from './Category'

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
                    fixed(width: 350, height: 350) {
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
          (
            {
              node: {
                frontmatter: { title, image, shortDescription },
                fields: { slug },
              },
            },
            index,
          ) => (
            <Category
              key={title}
              index={index}
              title={title}
              image={image}
              shortDescription={shortDescription}
              slug={slug}
            />
          ),
        )
    }
  />
)

export default Categories
