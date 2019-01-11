import { Link } from 'gatsby'
import Image from 'gatsby-image'
import styled from 'styled-components'

import { COLORS, FONTS, media, BREAKPOINTS } from '../../styles/styleguide'

const TRANSITION_DURATION = '0.3s'

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: hidden;
  border: 1px solid ${COLORS.GREY};
  border-radius: 15px;
  flex: 0 1 300px;

  ${media.lessThan(BREAKPOINTS.MEDIUM_MINUS_ONE)`
    margin: 0 0 50px;
  `}

  ${media.greaterThan(BREAKPOINTS.MEDIUM)`
    margin: 30px 2% 30px 2%;
  `}
`

export const CardImageLink = styled(Link)`
  width: 100%;

  ${media.lessThan(BREAKPOINTS.MEDIUM_MINUS_ONE)`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
    overflow: hidden;
  `}

  ${media.greaterThan(BREAKPOINTS.MEDIUM)`
    height: 350px;
    margin-bottom: 100px;
  `}
`

export const CardImage = styled(Image)`
  ${media.greaterThan(BREAKPOINTS.MEDIUM)`
    transform: ${props => (props.hovered ? 'scale(1.1)' : 'scale(1)')};
    transition: transform ${TRANSITION_DURATION} ease-in;

    ::after {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background: ${props =>
        props.hovered ? COLORS.BLACK_TRANSPARENT_IMAGE : 'none'};
      transition: background ${TRANSITION_DURATION} ease-in;
    }
  `}
`

export const CardContent = styled.div`
  padding: 20px;

  ${media.greaterThan(BREAKPOINTS.MEDIUM)`
    position: absolute;
    bottom: 50px;
    background: white;
  `}
`

export const CardTitle = styled.h3`
  ${FONTS.MEDIUM_BOLD}
  color: ${COLORS.GREEN};

  ${media.lessThan(BREAKPOINTS.MEDIUM_MINUS_ONE)`
    margin: 0 0 10px 0;
  `}

  ${media.greaterThan(BREAKPOINTS.MEDIUM)`
    margin: 0 0 20px 0;
  `}
`

export const CardTitleLink = styled(Link)`
  text-decoration: none;
`

export const CardText = styled.p`
  ${FONTS.SMALL}
  margin: 0;

  ${media.greaterThan(BREAKPOINTS.MEDIUM)`
    height: ${props =>
      props.hovered ? '134.4px' : 0}; /* 22.4px (line-height) * 6 */
    opacity: ${props => (props.hovered ? 1 : 0)};
    transition: height ${TRANSITION_DURATION} ease-in,
      opacity ${TRANSITION_DURATION} linear;
    overflow: hidden;
  `}
`

export const TagsContainer = styled.div`
  display: flex;
  width: 100%;

  ${media.lessThan(BREAKPOINTS.MEDIUM_MINUS_ONE)`
    justify-content: center;
    border-top: 1px solid ${COLORS.GREY};
  `}

  ${media.greaterThan(BREAKPOINTS.MEDIUM)`
    position: absolute;
    bottom: 0;
    align-items: center;
    padding: 0 20px 20px 20px;
    box-sizing: border-box;
  `}
`

export const Tag = styled(Link)`
  display: flex;
  align-items: center;
  ${FONTS.SMALL_BOLD}
  color: ${COLORS.GREY};

  :not(:first-of-type) {
    margin-left: 15px;
  }

  :hover {
    color: ${COLORS.RED};
  }

  ${media.lessThan(BREAKPOINTS.MEDIUM_MINUS_ONE)`
    display: inline-block;
    text-decoration: underline;
    padding: 10px;
  `}

  ${media.greaterThan(BREAKPOINTS.MEDIUM)`
    text-decoration: none;
  `}
`
