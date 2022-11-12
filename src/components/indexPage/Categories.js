import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Category from './Category'

const Categories = () => {
  const {
    allMarkdownRemark: { edges },
  } = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(
          filter: {
            frontmatter: { categoryOnHomepage: { visible: { eq: true } } }
          }
          sort: { frontmatter: { categoryOnHomepage: { order: ASC } } }
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
    `,
  )

  return edges.map(
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

export default Categories
