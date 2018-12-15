import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { Normalize } from 'styled-normalize'

import Header from './Header'
import Footer from './Footer'
import ContentWrapper from './ContentWrapper'
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
          <Header />
          <main>{children}</main>
          <Footer />
          <Normalize />
          <GlobalStyle />
        </>
      )
    }}
  />
)

Layout.ContentWrapper = ContentWrapper

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
