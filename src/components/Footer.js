import React from 'react'
import styled from 'styled-components'

import { COLORS } from '../styles/styleguide'

const FooterElement = styled.footer`
  margin-top: 200px;
  padding: 100px;
  background: ${COLORS.GREEN};
  color: white;
`

const Footer = () => {
  return <FooterElement>Footer</FooterElement>
}

export default Footer
