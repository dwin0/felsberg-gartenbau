import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Logo from './Logo'
import HeaderElement from './HeaderElement'
import Navigation from './Navigation'

const Header = () => {
  const { allMarkdownRemark, site } = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(
          filter: {
            frontmatter: { linkInNavigation: { visible: { eq: true } } }
          }
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                linkInNavigation {
                  order
                }
              }
            }
          }
        }
        site {
          siteMetadata {
            title
          }
        }
      }
    `,
  )

  const navigationEntries = allMarkdownRemark.edges
    .sort(
      (edgeA, edgeB) =>
        edgeA.node.frontmatter.linkInNavigation.order -
        edgeB.node.frontmatter.linkInNavigation.order,
    )
    .map((edge) => ({
      link: edge.node.fields.slug,
      title: edge.node.frontmatter.title,
    }))

  return (
    <HeaderElement>
      <Logo to="/">{site.siteMetadata.title}</Logo>
      <Navigation navigationEntries={navigationEntries} />
    </HeaderElement>
  )
}

export default Header
