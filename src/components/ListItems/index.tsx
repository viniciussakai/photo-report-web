import React from 'react'
import { IReportContext, useReportContext } from 'context/ReportContext'
import { v4 as uuidv4 } from 'uuid'

import { ButtonDiv, Container, QtdItems } from './styles'
import { Button } from 'components/UI'
import { AddCircleOutlineRounded } from '@material-ui/icons'
import DDItems from 'components/DDItems'

const ListItems: React.FC = () => {
  const { reportItems, setReportItems } = useReportContext() as IReportContext

  const newItem = () => {
    const newItem = {
      id: uuidv4(),
      subtitle: 'novo Item'
    }
    const item = reportItems ? reportItems.concat(newItem) : []
    setReportItems(item)
  }
  return (
    <Container>
      <ButtonDiv>
        <Button
          endIcon={<AddCircleOutlineRounded />}
          variant="outlined"
          onClick={newItem}
          color="default"
        >
          Adicionar
        </Button>
      </ButtonDiv>
      <DDItems />
      {reportItems.length !== 0 ? (
        <QtdItems>{reportItems.length}</QtdItems>
      ) : null}
    </Container>
  )
}

export default ListItems
