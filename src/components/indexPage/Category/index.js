import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import Container from './Container'
import Title from './Title'
import Text from './Text'
import Link from './Link'
import Image from './Image'

const Category = ({ image, index, shortDescription, slug, title }) => {
  const ImageBlock = (
    <Container.ImageContainer>
      <Image fixed={image.childImageSharp.fixed} to={slug} />
    </Container.ImageContainer>
  )

  const TextBlock = (
    <Container.TextConainer>
      <Title>{title}</Title>
      <Text>{shortDescription}</Text>
      <Link to={slug}>Mehr</Link>
    </Container.TextConainer>
  )

  return (
    <Container>
      {(index % 2 == 0 ? [ImageBlock, TextBlock] : [TextBlock, ImageBlock]).map(
        (block, index) => (
          <Fragment key={index}>{block}</Fragment>
        ),
      )}
    </Container>
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
