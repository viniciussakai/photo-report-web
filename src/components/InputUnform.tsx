import React, { useEffect, useRef } from 'react'

import { useField } from '@unform/core'
import TextField, { TextFieldProps } from '@material-ui/core/TextField'
import styled from 'styled-components'

const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  &:first-child {
    width: 100%;
  }

  margin-bottom: 20px;
`

const Input: React.FC<TextFieldProps> = ({ name, label, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const { fieldName, defaultValue, registerField, error } = useField(
    name || 'default'
  )

  useEffect(() => {
    registerField({
      name: fieldName,
      path: 'value',
      ref: inputRef.current
    })
  }, [fieldName, registerField])

  return (
    <>
      <InputDiv>
        <TextField
          id={fieldName}
          label={label}
          inputRef={inputRef}
          value={defaultValue}
          error={!!error}
          {...rest}
        />
      </InputDiv>
    </>
  )
}

export default Input
