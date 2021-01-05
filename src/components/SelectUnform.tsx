import React, { useRef, useEffect } from 'react'
import ReactSelect, { OptionTypeBase, Props as SelectProps } from 'react-select'
import { useField } from '@unform/core'
import styled from 'styled-components'

interface Props extends SelectProps<OptionTypeBase> {
  name: string
}
const SelectDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  z-index: 200;

  &:first-child {
    width: 100%;
  }

  margin-bottom: 20px;
`

const SelectUnform: React.FC<Props> = ({ name, ...rest }) => {
  const selectRef = useRef(null)
  const { fieldName, defaultValue, registerField } = useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      getValue: (ref: any) => {
        if (rest.isMulti) {
          if (!ref.state.value) {
            return []
          }
          return ref.state.value.map((option: OptionTypeBase) => option.value)
        }
        if (!ref.state.value) {
          return ''
        }
        return ref.state.value.value
      }
    })
  }, [fieldName, registerField, rest.isMulti])

  return (
    <SelectDiv>
      <ReactSelect
        defaultValue={defaultValue}
        ref={selectRef}
        classNamePrefix="react-select"
        {...rest}
      />
    </SelectDiv>
  )
}

export default SelectUnform
