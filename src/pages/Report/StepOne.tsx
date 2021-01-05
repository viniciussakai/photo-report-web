import React from 'react'
import { Paper } from '@material-ui/core'

import { Container } from './styles'
import FormStepOne from 'components/FormStepOne'

const StepOne: React.FC = () => {
  return (
    <Container>
      <Paper style={{ height: '100%' }} elevation={1}>
        <FormStepOne />
      </Paper>
    </Container>
  )
}

export default StepOne
