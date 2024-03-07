import styled from 'styled-components'
import { COLORS } from '../../styles/styleguide'

export const Banner = styled.div`
  position: fixed;
  max-width: 550px;
  z-index: 100;
  bottom: 0;
  right: 0;
  background: ${COLORS.WHITE};
  border: 8px solid ${COLORS.GREEN};
  border-radius: 20px;
  padding: 15px 20px;
  margin: 15px;
  overflow: hidden;
`

export const BannerTitle = styled.h2`
  margin-bottom: 15px;
`

const baseButton = styled.button`
  &:hover {
    background: ${COLORS.GREEN};
    color: ${COLORS.WHITE};
  }
`

export const CloseButton = styled(baseButton)`
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

export const AcceptDenyButton = styled(baseButton)`
  background: ${COLORS.WHITE};
  border: 2px solid ${COLORS.GREEN};
`
