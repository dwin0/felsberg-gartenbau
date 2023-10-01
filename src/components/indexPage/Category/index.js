import React from 'react'
import PropTypes from 'prop-types'

import { CategoryContainer, InnerContainer } from './Container'
import { MobileImageLink, DesktopImageLink, ButtonLink } from './Links'
import { CategoryTitle, CategoryText } from './TextElements'
import CategoryImage from './CategoryImage'

const Category = ({ image, imageAlt, shortDescription, slug, title }) => (
  <CategoryContainer>
    <InnerContainer>
      <CategoryTitle>{title}</CategoryTitle>
      <MobileImageLink to={slug}>
        <CategoryImage image={image.childImageSharp.gatsbyImageData} alt="" />
      </MobileImageLink>
      <CategoryText>{shortDescription}</CategoryText>
      <ButtonLink to={slug}>Mehr</ButtonLink>
    </InnerContainer>
    <DesktopImageLink to={slug}>
      <CategoryImage
        image={image.childImageSharp.gatsbyImageData}
        alt={imageAlt}
      />
    </DesktopImageLink>
  </CategoryContainer>
)

Category.propTypes = {
  image: PropTypes.shape({
    childImageSharp: PropTypes.object.isRequired,
  }).isRequired,
  imageAlt: PropTypes.string.isRequired,
  shortDescription: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default Category
