import React from 'react'
import {
  Container,
  ImgPreview,
  TextSubtitle,
  Subtitle,
  CloseButton
} from './styles'
import semFoto from 'assets/sem-foto.jpeg'
import { IReportItem } from 'types/report'
import { Close } from '@material-ui/icons'
interface Props {
  item: IReportItem
  onItemSelect: (item: IReportItem) => void
  handleDeleteItem: (item: IReportItem) => void
}

const ItemReport: React.FC<Props> = ({
  item,
  onItemSelect,
  handleDeleteItem
}) => {
  const image = item.uploadedFile?.preview || semFoto

  return (
    <Container onClick={() => onItemSelect(item)}>
      <ImgPreview image={image} title={item.subtitle} />
      <Subtitle>
        <TextSubtitle>{item.subtitle}</TextSubtitle>
      </Subtitle>
      <CloseButton>
        <Close onClick={() => handleDeleteItem(item)} />
      </CloseButton>
    </Container>
  )
}

export default ItemReport
