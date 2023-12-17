import React from 'react'
import PropTypes from 'prop-types'

import { Label, FieldName, Input } from './FormElements'

const InputField = ({
  type,
  text,
  id,
  value,
  onChange,
  onFocus,
  onBlur,
  required,
  currentFocus,
  disabled,
}) => (
  <Label htmlFor={id}>
    <FieldName $focus={currentFocus === id}>{text}</FieldName>
    <Input
      as={type === 'textarea' ? 'textarea' : 'input'}
      type={type || 'text'}
      name={id}
      id={id}
      value={value}
      required={required}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      disabled={disabled}
    />
  </Label>
)

InputField.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onFocus: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  required: PropTypes.bool,
  currentFocus: PropTypes.string,
  disabled: PropTypes.bool,
}

export default InputField
