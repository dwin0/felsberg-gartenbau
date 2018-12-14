import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Image from 'gatsby-image'
import { Link } from 'gatsby'

import { COLORS } from '../../../styles/styleguide'

const StyledImage = styled(Image)`
  position: relative;
  border-radius: 15%;
  margin: 0 20px;

  ::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: ${COLORS.BLACK_TRANSPARENT};
  }
`

const CategoryImage = ({ to, ...props }) => (
  <Link to={to}>
    <StyledImage {...props} />
  </Link>
)

CategoryImage.propTypes = {
  to: PropTypes.string.isRequired,
}

export default CategoryImage
