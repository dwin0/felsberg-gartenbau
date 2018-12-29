import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ContentStyle = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 50px;
`

const ContentWrapper = ({ children }) => <ContentStyle>{children}</ContentStyle>

ContentWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}

export default ContentWrapper
