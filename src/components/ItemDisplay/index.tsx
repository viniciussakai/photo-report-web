import React from 'react'
import semFoto from 'assets/sem-foto.jpeg'
import { ImageSelector, Image, ImageContainer } from './styles'
import { IReportContext, useReportContext } from 'context/ReportContext'
import { IReportItem, IUploadFile } from 'types/report'
import { TextField } from '@material-ui/core'
import DropPhotos from 'components/DropFiles'

const DisplayItem: React.FC = () => {
  const {
    reportItems,
    setReportItems,
    selectedItem
  } = useReportContext() as IReportContext

  const item = reportItems[selectedItem]

  type IEditParams = { subtitle?: string; uploadedFile?: IUploadFile }
  const editItem = ({ subtitle, uploadedFile }: IEditParams) => {
    const prevItem = reportItems[selectedItem]

    const reportItem: IReportItem = {
      ...prevItem,
      subtitle: subtitle || '',
      uploadedFile: uploadedFile || prevItem.uploadedFile
    }

    const items = reportItems
    items.splice(selectedItem, 1, reportItem)
    return setReportItems([...items])
  }

  const handleUpload = (files: File[]) => {
    const file = files[0]
    const uploadedFile = {
      file,
      name: file.name,
      readableSize: file.size,
      preview: URL.createObjectURL(file)
    }

    editItem({ uploadedFile })
  }

  return (
    <>
      <ImageSelector>
        {item ? (
          item?.uploadedFile?.preview ? (
            <ImageContainer>
              <Image src={item?.uploadedFile?.preview} />
            </ImageContainer>
          ) : (
            <DropPhotos handleUpload={handleUpload} />
          )
        ) : (
          <ImageContainer>
            <Image src={semFoto} />
          </ImageContainer>
        )}
        {item ? (
          <TextField
            fullWidth
            variant="outlined"
            label="Legenda"
            size="small"
            onChange={e => {
              editItem({ subtitle: e.target.value })
            }}
            value={item?.subtitle}
            defaultValue={item?.subtitle}
          />
        ) : null}
      </ImageSelector>
    </>
  )
}

export default DisplayItem
