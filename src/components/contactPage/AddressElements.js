import styled from 'styled-components'

import { ExternalLink } from '../common/Link'
import { media, BREAKPOINTS } from '../../styles/styleguide'

export const Container = styled.div`
  text-align: center;
  margin-bottom: 80px;
`

export const Text = styled.p`
  margin-bottom: 20px;
`

export const FurtherAddressLink = styled(ExternalLink)`
  display: inline-block;
`

export const List = styled.ul`
  list-style-type: none;
  padding: 0;
`

export const ListItem = styled.li`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;

  ${media.lessThan(BREAKPOINTS.MEDIUM_MINUS_ONE)`
    flex-direction: column;
  `}

  ${media.greaterThan(BREAKPOINTS.MEDIUM)`
    justify-content: center;
  `}
`
