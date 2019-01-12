import React from 'react'
import PropTypes from 'prop-types'
import Image from 'gatsby-image'
import styled from 'styled-components'

const Description = styled.p`
  line-height: 1;
  white-space: normal;
  padding: 20px 10px;
`

const PhotoWithText = ({ image, imageDescription, imageText }) => (
  <div>
    <Image
      fluid={image.childImageSharp.fluid}
      title={imageDescription}
      alt={imageDescription}
    />
    <Description>{imageText}</Description>
  </div>
)

PhotoWithText.propTypes = {
  image: PropTypes.shape({
    childImageSharp: PropTypes.shape({
      fluid: PropTypes.object.isRequired,
    }).isRequired,
  }).isRequired,
  imageDescription: PropTypes.string.isRequired,
  imageText: PropTypes.string,
}

export default PhotoWithText
