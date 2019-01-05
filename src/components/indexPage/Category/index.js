import React from 'react'
import PropTypes from 'prop-types'

import Container from './Container'
import Title from './Title'
import Text from './Text'
import Link from './Link'
import Image from './Image'

const Category = ({ image, shortDescription, slug, title }) => (
  <Container>
    <Container.ImageContainer>
      <Image fixed={image.childImageSharp.fixed} to={slug} />
    </Container.ImageContainer>
    <Container.TextConainer>
      <Title>{title}</Title>
      <Text>{shortDescription}</Text>
      <Link to={slug}>Mehr</Link>
    </Container.TextConainer>
  </Container>
)

Category.propTypes = {
  image: PropTypes.shape({
    childImageSharp: PropTypes.object.isRequired,
  }).isRequired,
  shortDescription: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default Category
