import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { media, BREAKPOINTS } from '../../styles/styleguide'

const ContentStyle = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  ${media.lessThan(BREAKPOINTS.MEDIUM_MINUS_ONE)`
    padding: 20px;
  `}

  ${media.greaterThan(BREAKPOINTS.MEDIUM)`
    padding: 50px;
  `}
`

const ContentWrapper = ({ children }) => <ContentStyle>{children}</ContentStyle>

ContentWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}

export default ContentWrapper
