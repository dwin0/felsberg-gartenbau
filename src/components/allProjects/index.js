import styled from 'styled-components'

import { ProjectsWrapper } from '../common/Projects'
import { media, BREAKPOINTS } from '../../styles/styleguide'

export const AllProjectsWrapper = styled(ProjectsWrapper)`
  justify-content: center;
  margin-top: 40px;

  ${media.lessThan(BREAKPOINTS.MEDIUM_MINUS_ONE)`
    margin-top: 20px;
  `}
`
