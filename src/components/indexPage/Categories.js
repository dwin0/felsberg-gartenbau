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
          sort: { fields: frontmatter___categoryOnHomepage___order, order: ASC }
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
                    gatsbyImageData(
                      layout: CONSTRAINED
                      formats: [AUTO, WEBP]
                      placeholder: TRACED_SVG
                      width: 350
                      height: 350
                    )
                  }
                }
                shortDescription
              }
            }
          }
        }
      }
    `}
    render={({ allMarkdownRemark: { edges } }) =>
      edges.map(
        ({
          node: {
            frontmatter: { title, image, shortDescription },
            fields: { slug },
          },
        }) => (
          <Category
            key={title}
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
