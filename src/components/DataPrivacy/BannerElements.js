import styled from 'styled-components'
import { COLORS } from '../../styles/styleguide'

export const Banner = styled.div`
  position: fixed;
  max-width: 550px;
  z-index: 1;
  bottom: 0;
  left: 0;
  background: ${COLORS.WHITE};
  border: 5px solid ${COLORS.GREEN};
  padding: 15px 20px;
  margin: 15px;
`

export const BannerTitle = styled.h2`
  margin-bottom: 15px;
`

export const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  padding: 10px 20px;
  border: none;
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 15px;
  gap: 10px;
`

export const AcceptDenyButton = styled.button`
  background: ${COLORS.WHITE};
  border: 2px solid ${COLORS.GREEN};
`
