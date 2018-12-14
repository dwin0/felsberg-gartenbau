import React from 'react'
import PropTypes from 'prop-types'

// TODO: not just hover handler
class HoverHandler extends React.Component {
  state = {
    hoveredItem: this.props.defaultItem,
  }

  handleHover = item =>
    this.setState({
      hoveredItem: item,
    })

  handleUnhover = () => {
    const { defaultItem } = this.props

    this.setState({
      hoveredItem: defaultItem,
    })
  }

  render() {
    return this.props.children({
      hoveredItem: this.state.hoveredItem,
      handleHover: this.handleHover,
      handleUnhover: this.handleUnhover,
    })
  }
}

HoverHandler.propTypes = {
  defaultItem: PropTypes.any,
  children: PropTypes.func.isRequired,
}

export default HoverHandler
