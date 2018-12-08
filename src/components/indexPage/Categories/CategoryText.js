import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import posed from 'react-pose'

const TextContainer = styled(
  posed.div({
    hidden: {
      opacity: 0,
      transition: { duration: 0 },
    },
    visible: {
      opacity: 1,
      transition: { duration: 800 },
    },
  }),
)`
  text-align: center;
  margin-bottom: 50px;
  margin-top: 200px;
  opacity: 0;
`

class CategoryText extends React.Component {
  state = { title: null, isHidden: false }

  componentDidMount() {
    this.setState({ isHidden: !this.state.isHidden })
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.title !== prevState.title) {
      return { title: nextProps.title, isHidden: true }
    }

    // No state update necessary
    return null
  }

  handlePoseComplete = () =>
    this.setState({
      isHidden: false,
    })

  render() {
    const { title, html } = this.props
    const { isHidden } = this.state

    return (
      <TextContainer
        pose={isHidden ? 'hidden' : 'visible'}
        onPoseComplete={this.handlePoseComplete}
      >
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </TextContainer>
    )
  }
}

CategoryText.propTypes = {
  title: PropTypes.string.isRequired,
  html: PropTypes.string.isRequired,
}

export default CategoryText
