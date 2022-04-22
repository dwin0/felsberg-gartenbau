import React from 'react'
import PropTypes from 'prop-types'
import { GatsbyImage as Image } from 'gatsby-plugin-image'

import { SingleSlideWrapper, ImageDescription } from './GalleryElements'

const PhotoWithTextSlide = ({ image, imageDescription, imageText }) => (
  <SingleSlideWrapper>
    <Image
      image={image.childImageSharp.gatsbyImageData}
      title={imageDescription}
      alt={imageDescription}
      style={{ width: '100%' }}
    />
    {imageText && <ImageDescription>{imageText}</ImageDescription>}
  </SingleSlideWrapper>
)

PhotoWithTextSlide.propTypes = {
  image: PropTypes.shape({
    childImageSharp: PropTypes.shape({
      gatsbyImageData: PropTypes.object.isRequired,
    }).isRequired,
  }).isRequired,
  imageDescription: PropTypes.string.isRequired,
  imageText: PropTypes.string,
}

export default PhotoWithTextSlide
