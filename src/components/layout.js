import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import GlobalStyle from '../styles/GlobalStyle'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            siteUrl
            description
            keywords
          }
        }
      }
    `}
    render={data => {
      const {
        site: {
          siteMetadata: { title, siteUrl, description, keywords },
        },
      } = data

      return (
        <>
          <Helmet
            title={title}
            meta={[
              { name: 'description', content: description },
              { name: 'keywords', content: keywords },
              { name: 'canonical', content: siteUrl },
            ]}
          >
            <html lang="de" />
          </Helmet>
          <Header siteTitle={title} />
          <div>{children}</div>
          <GlobalStyle />
        </>
      )
    }}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
