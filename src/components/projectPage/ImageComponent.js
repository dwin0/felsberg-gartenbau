import React from 'react'
import PropTypes from 'prop-types'
import { GatsbyImage as Image } from 'gatsby-plugin-image'

const ImageComponent = (props) => {
  // according to the library examples, the event must be fired like this
  const eventHandler = (e) =>
    props.onClick(e, {
      index: props.index,
    })

  return (
    <div
      style={{
        margin: props.margin,
        width: props.photo.width,
        height: props.photo.height,
      }}
      onClick={eventHandler}
      onKeyPress={eventHandler}
      role="button"
      tabIndex="0"
    >
      <Image
        image={props.photo}
        alt={props.photo.imageDescription}
        title={props.photo.imageDescription}
      />
    </div>
  )
}

ImageComponent.propTypes = {
  index: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  photo: PropTypes.shape({
    aspectRatio: PropTypes.number.isRequired,
    sizes: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    srcSet: PropTypes.string.isRequired,
    srcWebp: PropTypes.string.isRequired,
    srcSetWebp: PropTypes.string.isRequired,
    tracedSVG: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    imageDescription: PropTypes.string.isRequired,
  }).isRequired,
  margin: PropTypes.number,
}

export default ImageComponent
