import React from 'react'
import PropTypes from 'prop-types'
import Image from 'gatsby-image'
import styled from 'styled-components'

const Description = styled.p`
  display: none; /* TODO: */
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
