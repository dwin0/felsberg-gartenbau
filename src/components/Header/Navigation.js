import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from 'styled-components'

import { COLORS, media, BREAKPOINTS } from '../../styles/styleguide'
import { HEADER_HEIGHT } from '../../styles/constants'

const NavigationWrapper = styled.nav`
  display: flex;

  ${media.lessThan(BREAKPOINTS.MEDIUM_MINUS_ONE)`
    position: absolute;
    top: ${HEADER_HEIGHT};
    height: calc(100vh - ${HEADER_HEIGHT});
    width: 100%;
    flex-direction: column;
    align-items: center;
    background: ${COLORS.WHITE};
    transform: ${props => (props.isVisible ? 'none' : 'translateX(100%)')};
    transition: transform 0.3s ease-out;
  `}

  ${media.greaterThan(BREAKPOINTS.MEDIUM)`
    height: 100%;
  `}
`
const NavigationEntry = styled(Link)`
  color: ${COLORS.BLACK};
  text-decoration: none;

  ${media.lessThan(BREAKPOINTS.MEDIUM_MINUS_ONE)`
    padding: 20px;
  `}

  ${media.greaterThan(BREAKPOINTS.MEDIUM)`
    display: flex;
    align-items: center;
    padding: 0 20px;
    border-left: 1px solid ${COLORS.BLACK_TRANSPARENT};

    :hover {
      margin-bottom: -3px;
      border-bottom: 3px solid ${COLORS.GREEN};
    }
  `}
`

const HamburgerButton = styled.button`
  border: 1px solid black;

  ${media.greaterThan(BREAKPOINTS.MEDIUM)`
    display: none;
  `}
`

class Navigation extends React.Component {
  state = {
    isVisible: false,
  }

  toggleNavigation = () =>
    this.setState(prevState => ({
      isVisible: !prevState.isVisible,
    }))

  render() {
    const { navigationEntries } = this.props
    const { isVisible } = this.state

    return (
      <Fragment>
        <HamburgerButton onClick={this.toggleNavigation}>MENU</HamburgerButton>
        <NavigationWrapper isVisible={isVisible}>
          {navigationEntries.map(({ link, title }) => (
            <NavigationEntry key={title} to={link}>
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
