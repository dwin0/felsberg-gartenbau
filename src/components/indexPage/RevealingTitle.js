import styled, { keyframes } from 'styled-components'

import { COLORS } from '../../styles/styleguide'

const fadeIn = keyframes`
  100% {
    opacity: 1;
  }
`

export const ImageTitleWrapper = styled.div`
  position: relative;
`

export const RevealingTitle = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
  display: block;
  padding: 25px 100px;
  color: ${COLORS.GREEN};
  opacity: 0;
  animation: ${fadeIn} 0.75s linear 0.5s 1 forwards;

  ::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    background: ${COLORS.WHITE};
    opacity: 0.8;
    z-index: -1;
  }
`
