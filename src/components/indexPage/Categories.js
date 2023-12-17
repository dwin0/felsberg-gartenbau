import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Category from './Category'

const Categories = () => {
  const {
    allMarkdownRemark: { edges },
  } = useStaticQuery(graphql`
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
                  gatsbyImageData(layout: CONSTRAINED, width: 350, height: 350)
                }
              }
              imageAlt
              shortDescription
            }
          }
        }
      }
    }
  `)

  return edges.map(
    ({
      node: {
        frontmatter: { title, image, imageAlt, shortDescription },
        fields: { slug },
      },
    }) => (
      <Category
        key={title}
        title={title}
        image={image}
        imageAlt={imageAlt}
        shortDescription={shortDescription}
        slug={slug}
      />
    ),
  )
}

export default Categories
