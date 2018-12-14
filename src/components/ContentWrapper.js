import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { MEDIA } from '../styles/styleguide'

const ContentStyle = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 50px;

  ${MEDIA.TABLET`
    padding: 0 30px;
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
