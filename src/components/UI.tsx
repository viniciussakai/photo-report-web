import React from 'react'
import MUIButton, { ButtonProps } from '@material-ui/core/Button'
import theme from 'config/theme'

export const Button: React.FC<ButtonProps> = ({ ...props }) => {
  return (
    <MUIButton
      style={{
        backgroundColor: theme.primarybackground,
        color: theme.buttonColorDefault
      }}
      {...props}
    />
  )
}
