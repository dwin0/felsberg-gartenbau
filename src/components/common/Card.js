import { Link } from 'gatsby'
import Image from 'gatsby-image'
import styled from 'styled-components'

import { COLORS, FONTS, LINE_HEIGHTS } from '../../styles/styleguide'

const TRANSITION_DURATION = '0.3s'

export const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 350px;
  overflow: hidden;
  border: 1px solid ${COLORS.GREY};
  box-shadow: ${props =>
    props.hovered ? '0px 0px 97px -22px rgba(170,170,170,0.5)' : 'none'};
  transition: box-shadow ${TRANSITION_DURATION} ease-in;
  margin: 50px 20px;
`

export const CardImageLink = styled(Link)`
  max-height: 350px;
  margin-bottom: 100px;
`

export const CardImage = styled(Image)`
  transform: ${props => (props.hovered ? 'scale(1.1)' : 'scale(1)')};
  transition: transform ${TRANSITION_DURATION} ease-in;
  position: relative;

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
`

export const CardContent = styled.div`
  position: absolute;
  bottom: 50px;
  z-index: 1;
  background: white;
  padding: 20px;
`

export const CardTitle = styled.h2`
  margin: 0 0 20px 0;
  color: ${COLORS.GREEN};
`

export const CardTitleLink = styled(Link)`
  text-decoration: none;
  font: inherit;
  color: inherit;
`

export const CardText = styled.p`
  ${FONTS.SMALL}
  margin: 0;
  height: ${props => (props.hovered ? '120px' : 0)};
  opacity: ${props => (props.hovered ? 1 : 0)};
  transition: height ${TRANSITION_DURATION} ease-in,
    opacity ${TRANSITION_DURATION} linear;
  overflow: hidden;
`

export const TagsContainer = styled.div`
  position: absolute;
  bottom: 0;
  height: ${LINE_HEIGHTS.SMALL_LH};
  display: flex;
  align-items: center;
  padding: 0 20px 20px 20px;
  width: 100%;
  box-sizing: border-box;
`

export const Tag = styled(Link)`
  ${FONTS.SMALL_BOLD}
  text-decoration: none;
  color: ${COLORS.GREY};

  :not(:first-of-type) {
    margin-left: 15px;
  }

  :hover {
    color: ${COLORS.RED};
  }
`
