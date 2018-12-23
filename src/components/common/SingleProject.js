import React from 'react'
import PropTypes from 'prop-types'
import isEmpty from 'lodash/fp/isEmpty'

import {
  Card,
  CardImageLink,
  CardImage,
  CardContent,
  CardTitle,
  CardText,
  TagsContainer,
  Tag,
} from './Card'

class SingleProject extends React.Component {
  state = {
    hovered: false,
  }

  handleMouseOver = () =>
    this.setState({
      hovered: true,
    })

  handleMouseLeave = () =>
    this.setState({
      hovered: false,
    })

  render() {
    const { title, slug, shortDescription, images, tags } = this.props
    const { hovered } = this.state

    return (
      <Card
        onMouseOver={this.handleMouseOver}
        onFocus={this.handleMouseover}
        onMouseLeave={this.handleMouseLeave}
        onBlur={this.handleMouseLeave}
        hovered={hovered}
      >
        <CardImageLink to={slug}>
          <CardImage
            fixed={
              !isEmpty(images) ? images[0].image.childImageSharp.fixed : null
            }
            hovered={hovered}
          />
        </CardImageLink>
        <CardContent>
          <CardTitle>{title}</CardTitle>
          <CardText hovered={hovered}>{shortDescription}</CardText>
        </CardContent>
        {!isEmpty(tags) && (
          <TagsContainer>
            {tags.map(tag => (
              <Tag key={tag} to={`projekte/tags/${tag.toLowerCase()}`}>
                {tag}
              </Tag>
            ))}
          </TagsContainer>
        )}
      </Card>
    )
  }
}

SingleProject.propTypes = {
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  shortDescription: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.shape({
        childImageSharp: PropTypes.shape({
          fixed: PropTypes.object.isRequired,
        }).isRequired,
      }).isRequired,
    }),
  ),
  tags: PropTypes.arrayOf(PropTypes.string.isRequired),
}

export default SingleProject
