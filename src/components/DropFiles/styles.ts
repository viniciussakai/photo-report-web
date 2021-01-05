import styled, { css } from 'styled-components'

const dragActive = css`
  border-color: #78e5d5;
`
const dragReject = css`
  border-color: #e57878;
`
interface IDropContainer {
  isDragActive: boolean
  isDragReject: boolean
}
export const DropContainer = styled.div.attrs({
  classname: 'dropzone'
})<IDropContainer>`
  width: 100%;
  height: 90%;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 4px dashed #ddd;
  border-radius: 4px;
  cursor: pointer;
  transition: height 0.2s ease;
  ${props => props.isDragActive && dragActive};
  ${props => props.isDragReject && dragReject};
`
interface IUM {
  type?: string
}
export const UploadMessage = styled.p<IUM>`
  display: flex;
  color: ${props => props.type || 'default'};
  justify-content: center;
  align-items: center;
  padding: 15px 0;
`
