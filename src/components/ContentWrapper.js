import React from 'react'
import styled from 'styled-components'

const ContentStyle = styled.div`
  max-width: 1000px;
  margin: auto;
`

const ContentWrapper = ({ children }) => <ContentStyle>{children}</ContentStyle>

export default ContentWrapper
