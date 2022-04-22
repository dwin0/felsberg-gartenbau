import { Link } from 'gatsby'
import styled from 'styled-components'

import { COLORS, media, BREAKPOINTS } from '../../styles/styleguide'
import { HEADER_HEIGHT } from '../../styles/constants'

export const activeClassName = 'nav-item-active'

export const NavigationWrapper = styled.nav`
  display: flex;

  ${media.lessThan(BREAKPOINTS.MEDIUM_MINUS_ONE)`
    position: fixed;
    overflow: auto;
    top: ${HEADER_HEIGHT};
    height: calc(100vh - ${HEADER_HEIGHT});
    width: 100%;
    flex-direction: column;
    align-items: center;
    background: ${COLORS.WHITE};
    transform: ${(props) => (props.isVisible ? 'none' : 'translateX(100%)')};
    transition: transform 0.3s ease-out;
  `}

  ${media.greaterThan(BREAKPOINTS.MEDIUM)`
    height: 100%;
  `}
`

export const NavigationEntry = styled(Link)`
  color: ${COLORS.BLACK};
  text-decoration: none;
  text-align: center;

  &.${activeClassName} {
    background: ${COLORS.GREEN};
    color: ${COLORS.WHITE};
  }

  ${media.lessThan(BREAKPOINTS.MEDIUM_MINUS_ONE)`
    width: 100%;
    padding: 20px 0;

    :first-of-type {
      margin-top: 30px;
    }
    :last-of-type {
      margin-bottom: 30px;
    }
  `}

  ${media.greaterThan(BREAKPOINTS.MEDIUM)`
    display: flex;
    align-items: center;
    padding: 0 .9vw;
    border-left: 1px solid ${COLORS.BLACK_TRANSPARENT};
    position: relative;

    ::after {
      content: '';
      position: absolute;
      height: 5px;
      bottom: -1px; /* border bottom */
      left: -1px; /* border left */
      right: 0;
      background: ${COLORS.GREEN};
      opacity: 0;
      transition: opacity .3s ease-in-out;
    }

    :hover:not(.${activeClassName}) {
      color: ${COLORS.GREEN};
    }

    :hover::after,
    &.${activeClassName}::after {
      opacity: 1;
    }
  `}

  ${media.greaterThan(BREAKPOINTS.LARGE)`
    padding: 0 20px;
  `}
`
