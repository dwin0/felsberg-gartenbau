import styled from 'styled-components'

import { media, BREAKPOINTS } from '../../../styles/styleguide'

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 60%;

  ${media.lessThan(BREAKPOINTS.MEDIUM_MINUS_ONE)`
    align-items: center;
  `}

  ${media.greaterThan(BREAKPOINTS.MEDIUM)`
    padding: 0 40px;
    justify-content: center;
  `}
`

export const CategoryContainer = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: auto;

  ${media.lessThan(BREAKPOINTS.MEDIUM_MINUS_ONE)`
    flex-direction: column; 
    text-align: center;
    max-width: 400px;
    margin-bottom: 40px;
  `}

  ${media.greaterThan(BREAKPOINTS.MEDIUM)`
    flex-direction: row;
    max-width: 1000px;
    margin-top: 100px;

    :nth-of-type(2n) > ${InnerContainer} {
      order: 1;
    }
  `}
`
