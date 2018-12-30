import React from 'react'
import PropTypes from 'prop-types'
import { Normalize } from 'styled-normalize'

import Helmet from './Helmet'
import Header from './Header'
import Footer from './Footer'
import ContentWrapper from './ContentWrapper'
import GlobalStyle from '../styles/GlobalStyle'

const Layout = ({ children }) => (
  <>
    <Helmet />
    <Header />
    <main>{children}</main>
    <Footer />
    <Normalize />
    <GlobalStyle />
  </>
)

Layout.ContentWrapper = ContentWrapper

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
