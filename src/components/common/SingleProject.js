import React from 'react'
import PropTypes from 'prop-types'
import isEmpty from 'lodash/fp/isEmpty'

import {
  Card,
  CardImageLink,
  CardImage,
  CardContent,
  CardTitle,
  CardTitleLink,
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
    const { title, slug, shortDescription, mainImage, tags } = this.props
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
            style={{ width: '100%', height: '100%' }}
            fixed={mainImage.childImageSharp.fixed}
            hovered={hovered}
          />
        </CardImageLink>
        <CardContent>
          <CardTitleLink to={slug}>
            <CardTitle>{title}</CardTitle>
          </CardTitleLink>
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
  mainImage: PropTypes.shape({
    childImageSharp: PropTypes.shape({
      fixed: PropTypes.object.isRequired,
    }).isRequired,
  }).isRequired,
  tags: PropTypes.arrayOf(PropTypes.string.isRequired),
}

export default SingleProject
