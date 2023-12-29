import React from 'react'
import PropTypes from 'prop-types'
import { Normalize } from 'styled-normalize'

import Header from '../Header'
import Footer from '../Footer'
import ContentWrapper from './ContentWrapper'
import Main from './Main'
import GlobalStyle from '../../styles/GlobalStyle'
import CookieBanner from '../DataPrivacy/CookieBanner'

const Layout = ({ children }) => (
  <>
    <CookieBanner />
    <Header />
    <Main>{children}</Main>
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
