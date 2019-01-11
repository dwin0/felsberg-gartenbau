import styled from 'styled-components'
import { FiSearch } from 'react-icons/fi'

export const StyledInput = styled.input`
  width: 100%;
  height: 100%;
  border: 1px solid grey;
  padding: 0 20px;
  box-sizing: border-box;
`

export const InputWrapper = styled.div`
  width: 100%;
  height: 50px;
  position: relative;
  margin-top: 40px;
`

export const SearchIcon = styled(FiSearch)`
  position: absolute;
  top: 50%;
  right: 15px;
  transform: translateY(-50%);
`
