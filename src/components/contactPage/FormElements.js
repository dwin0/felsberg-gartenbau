import styled from 'styled-components'
import Recaptcha from 'react-google-recaptcha'

import { COLORS, media, BREAKPOINTS } from '../../styles/styleguide'
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

  color: ${(props) => (props.$focus ? COLORS.GREEN : 'initial')};
  font-weight: ${(props) => (props.$focus ? 'bold' : 'initial')};
`

export const Input = styled.input`
  height: ${(props) => (props.type === 'textarea' ? '100px' : '30px')};
  border-radius: 25px;
  padding: 10px ${PADDING_LEFT};

  &:focus {
    background: ${COLORS.WHITE};
    outline: solid ${COLORS.GREEN};
  }

  &:disabled {
    background: ${COLORS.WHITE};
  }
`

export const ReponsiveRecaptcha = styled(Recaptcha)`
  ${media.lessThan(BREAKPOINTS.SMALL_MINUS_ONE)`
    transform:scale(0.75);
    transform-origin:0 0;
  `}
  ${media.between(BREAKPOINTS.SMALL, BREAKPOINTS.MEDIUM_MINUS_ONE)`
    transform:scale(0.90);
    transform-origin: 0 0;
  `}
  ${media.greaterThan(BREAKPOINTS.MEDIUM)`
    margin: 0 auto;
  `}
`

export const SubmitButton = styled.button`
  ${buttonStyle};
  margin: 40px auto 20px;
`

const Message = styled.p`
  padding: 20px;
`

export const SuccessMessage = styled(Message)`
  background: ${COLORS.GREEN};
  color: ${COLORS.WHITE};
`

export const WarningMessage = styled(Message)`
  background: ${COLORS.YELLOW};
  color: ${COLORS.BLACK};
`

export const ErrorMessage = styled(Message)`
  background: ${COLORS.RED};
  color: ${COLORS.WHITE};
`
