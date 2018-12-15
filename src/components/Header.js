import PropTypes from 'prop-types'
import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'

import styled from 'styled-components'

const Navigation = styled.nav`
  display: flex;
`

const Header = ({ siteTitle }) => (
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
      }
    `}
    render={({ allMarkdownRemark: { edges } }) => {
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
        <header>
          <h1>
            <Link to="/">{siteTitle}</Link>
            <Navigation>
              {navigationEntries.map(({ link, title }) => (
                <Link key={title} to={link}>
                  {title} |
                </Link>
              ))}
            </Navigation>
          </h1>
        </header>
      )
    }}
  />
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
