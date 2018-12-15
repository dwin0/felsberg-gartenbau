import React, { Fragment } from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Logo from './Logo'
import { Navigation, NavigationEntry } from './Navigation'
import { HeaderPlaceholder, HeaderElement } from './HeaderElement'

const Header = () => (
  <StaticQuery
    query={graphql`
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
    `}
    render={({ allMarkdownRemark: { edges }, site }) => {
      const navigationEntries = edges
        .sort(
          (edgeA, edgeB) =>
            edgeA.node.frontmatter.linkInNavigation.order -
            edgeB.node.frontmatter.linkInNavigation.order,
        )
        .map(edge => ({
          link: edge.node.fields.slug,
          title: edge.node.frontmatter.title,
        }))

      return (
        <Fragment>
          <HeaderPlaceholder />
          <HeaderElement>
            <Logo to="/">{site.siteMetadata.title}</Logo>
            <Navigation>
              {navigationEntries.map(({ link, title }) => (
                <NavigationEntry key={title} to={link}>
                  {title}
                </NavigationEntry>
              ))}
            </Navigation>
          </HeaderElement>
        </Fragment>
      )
    }}
  />
)

export default Header
