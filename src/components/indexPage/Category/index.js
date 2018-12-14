import React from 'react'
import PropTypes from 'prop-types'

import CategoryContainer from './CategoryContainer'
import CategoryLink from './CategoryLink'
import CategoryTitle from './CategoryTitle'
import CategoryImage from './CategoryImage'

const Category = ({ image, index, shortDescription, slug, title }) => {
  const Image = (
    <CategoryContainer.ImageContainer>
      <CategoryImage fixed={image.childImageSharp.fixed} to={slug} />
    </CategoryContainer.ImageContainer>
  )

  const Text = (
    <CategoryContainer.TextConainer>
      <CategoryTitle>{title}</CategoryTitle>
      <p>{shortDescription}</p>
      <CategoryLink to={slug}>Mehr</CategoryLink>
    </CategoryContainer.TextConainer>
  )

  return (
    <CategoryContainer>
      {index % 2 == 0 ? [Image, Text] : [Text, Image]}
    </CategoryContainer>
  )
}

Category.propTypes = {
  image: PropTypes.shape({
    childImageSharp: PropTypes.object.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  shortDescription: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default Category
