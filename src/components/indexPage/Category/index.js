import React from 'react'
import PropTypes from 'prop-types'

import { CategoryContainer, InnerContainer } from './Container'
import { MobileImageLink, DesktopImageLink } from './Links'
import { CategoryTitle, CategoryText } from './TextElements'
import CategoryImage from './CategoryImage'
import { GatsbyLink } from '../../common/Link'

const Category = ({ image, imageAlt, shortDescription, slug, title }) => (
  <CategoryContainer>
    <InnerContainer>
      <CategoryTitle>{title}</CategoryTitle>
      <MobileImageLink to={slug} tabindex="-1">
        <CategoryImage
          image={image.childImageSharp.gatsbyImageData}
          alt={imageAlt}
        />
      </MobileImageLink>
      <CategoryText>{shortDescription}</CategoryText>
      <GatsbyLink to={slug}>Mehr über {title} erfahren</GatsbyLink>
    </InnerContainer>
    <DesktopImageLink to={slug} tabindex="-1">
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
