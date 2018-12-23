import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import Image from 'gatsby-image'
import styled from 'styled-components'
import isEmpty from 'lodash/fp/isEmpty'

import { COLORS } from '../../styles/styleguide'

const Card = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 350px;
  overflow: hidden;
  border: 1px solid ${COLORS.GREY};
  box-shadow: ${props =>
    props.hovered ? '0px 0px 97px -22px rgba(0,0,0,0.5)' : 'none'};
  transition: box-shadow 0.2s ease-in;

  :not(:first-of-type) {
    margin-left: 150px;
  }
`

const CardImage = styled(Image)`
  transform: ${props => (props.hovered ? 'scale(1.1)' : 'scale(1)')};
  transition: transform 0.2s ease-in;
`

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
        <Link to={slug}>
          <CardImage
            fixed={
              !isEmpty(images) ? images[0].image.childImageSharp.fixed : null
            }
            hovered={hovered}
          />
        </Link>
        <h2>{title}</h2>
        <p>{shortDescription}</p>
        {!isEmpty(tags) && (
          <div>
            <h2>Stichwörter</h2>
            {tags.map(tag => (
              <Link key={tag} to={`projekte/tags/${tag.toLowerCase()}`}>
                {tag}
              </Link>
            ))}
          </div>
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
