import FormStepThree from 'components/FormStepThree'
import React from 'react'
import { Container, StepThreeContainer } from './styles'

const StepThree: React.FC = () => {
  return (
    <Container>
      <StepThreeContainer>
        <FormStepThree />
      </StepThreeContainer>
    </Container>
  )
}

export default StepThree
