import styled from 'styled-components'

import { COLORS } from '../../styles/styleguide'
import { buttonStyle } from '../common/Button'

const PADDING_LEFT = '30px'

export const Form = styled.form`
  border: 1px solid grey;
  border-radius: 15px;
  padding: 20px;

  display: flex;
  flex-direction: column;

  max-width: 500px;
  margin: auto;
`

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin: 10px 0;
`

export const FieldName = styled.span`
  padding-left: ${PADDING_LEFT};
  margin: 5px 0;

  color: ${props => (props.focus ? COLORS.GREEN : 'initial')};
  font-weight: ${props => (props.focus ? 'bold' : 'initial')};
`

export const Input = styled.input`
  height: ${props => (props.type === 'textarea' ? '100px' : '30px')};
  border-radius: 25px;
  background: lightgray;

  border: none;
  padding: 10px ${PADDING_LEFT};
  outline: none;

  :focus {
    background: ${COLORS.GREEN_LIGHT};
  }

  :disabled {
    background: ${COLORS.WHITE};
  }
`

export const SubmitButton = styled.button`
  ${buttonStyle};
  margin: 40px auto 20px;
`

const Message = styled.p`
  color: ${COLORS.WHITE};
  padding: 20px;
`

export const SuccessMessage = styled(Message)`
  background: ${COLORS.GREEN};
`

export const ErrorMessage = styled(Message)`
  background: ${COLORS.RED};
`
