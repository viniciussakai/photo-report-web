import React from 'react'
import ItemDisplay from 'components/ItemDisplay'

import {
  PhotoDisplayContainer,
  StepTwoContainer,
  ListItemsContainer
} from './styles'
import ListItems from 'components/ListItems'
import Bottom from 'components/Bottom'

const StepTwo: React.FC = () => {
  return (
    <>
      <StepTwoContainer>
        <PhotoDisplayContainer>
          <ItemDisplay />
        </PhotoDisplayContainer>
        <ListItemsContainer>
          <ListItems />
        </ListItemsContainer>
        <Bottom />
      </StepTwoContainer>
    </>
  )
}

export default StepTwo
