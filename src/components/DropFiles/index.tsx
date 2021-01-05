import React from 'react'
import Dropzone from 'react-dropzone'
import { DropContainer, UploadMessage } from './styles'

type Props = {
  handleUpload: (files: File[]) => void
}

const DropPhotos: React.FC<Props> = ({ handleUpload }) => {
  const renderDragMessage = (isDragActive: boolean, isDragReject: boolean) => {
    if (!isDragActive) {
      return <UploadMessage>Click ou Arraste aqui...</UploadMessage>
    }

    if (isDragReject) {
      return <UploadMessage type="error">Arquivo não suportado</UploadMessage>
    }

    return <UploadMessage type="success">Solte os arquivos aqui</UploadMessage>
  }
  return (
    <Dropzone accept="image/*" onDropAccepted={handleUpload}>
      {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
        <DropContainer
          {...getRootProps()}
          isDragActive={isDragActive}
          isDragReject={isDragReject}
        >
          <input {...getInputProps()} />
          {renderDragMessage(isDragActive, isDragReject)}
        </DropContainer>
      )}
    </Dropzone>
  )
}

export default DropPhotos
