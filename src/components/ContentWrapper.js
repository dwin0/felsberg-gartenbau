import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ContentStyle = styled.div`
  max-width: 1000px;
  margin: auto;
`

const ContentWrapper = ({ children }) => <ContentStyle>{children}</ContentStyle>

ContentWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}

export default ContentWrapper
