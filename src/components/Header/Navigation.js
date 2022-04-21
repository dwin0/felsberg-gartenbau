import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import HamburgerButton from './HamburgerButton'
import {
  NavigationWrapper,
  NavigationEntry,
  activeClassName,
} from './NavigationElements'

class Navigation extends React.Component {
  state = {
    isVisible: false,
  }

  toggleNavigation = () =>
    this.setState((prevState) => ({
      isVisible: !prevState.isVisible,
    }))

  render() {
    const { navigationEntries } = this.props
    const { isVisible } = this.state

    return (
      <Fragment>
        <HamburgerButton
          clickHandler={this.toggleNavigation}
          isOpen={isVisible}
        />
        <NavigationWrapper isVisible={isVisible}>
          {navigationEntries.map(({ link, title }) => (
            <NavigationEntry
              key={title}
              to={link}
              activeClassName={activeClassName}
            >
              {title}
            </NavigationEntry>
          ))}
        </NavigationWrapper>
      </Fragment>
    )
  }
}

Navigation.propTypes = {
  navigationEntries: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
}

export default Navigation
