import styled from 'styled-components'

import { COLORS } from '../../styles/styleguide'

const HEADER_HEIGHT = '60px'

export const HeaderPlaceholder = styled.div`
  height: ${HEADER_HEIGHT};
`
export const HeaderElement = styled.header`
  position: fixed;
  top: 0;
  z-index: 10;
  width: 100%;
  height: ${HEADER_HEIGHT};
  background: ${COLORS.WHITE};
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  border-bottom: 1px solid ${COLORS.BLACK_TRANSPARENT};
  box-shadow: 0 3px 5px 0px rgba(0, 0, 0, 0.1);
`
