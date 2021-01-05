import React from 'react'
import MUIButton, { ButtonProps } from '@material-ui/core/Button'
import theme from 'config/theme'

export const Button: React.FC<ButtonProps> = ({ ...props }) => {
  const color =
    props.color === undefined
      ? {
          backgroundColor: theme.primarybackground,
          color: theme.buttonColorDefault
        }
      : {}
  return <MUIButton style={{ ...color }} {...props} />
}
