import styled from 'styled-components'

import { MEDIA } from '../../../styles/styleguide'

const CategoryContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  margin: 150px 0;

  ${MEDIA.TABLET`
    flex-direction: column;
  `}
`

CategoryContainer.ImageContainer = styled.div`
  flex: 0 1 calc(100% * 1 / 3);
  display: flex;
  justify-content: center;
  align-items: center;
`

CategoryContainer.TextConainer = styled.div`
  flex: 0 1 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export default CategoryContainer
