import styled from 'styled-components'

import { GatsbyLink } from '../common/Link'
import { ProjectsWrapper } from '../common/Projects'
import { media, BREAKPOINTS } from '../../styles/styleguide'

export const TagsLink = styled(GatsbyLink)`
  margin-top: 20px;
`

export const AllProjectsWrapper = styled(ProjectsWrapper)`
  justify-content: center;
  margin-top: 40px;

  ${media.lessThan(BREAKPOINTS.MEDIUM_MINUS_ONE)`
    margin-top: 20px;
  `}
`
