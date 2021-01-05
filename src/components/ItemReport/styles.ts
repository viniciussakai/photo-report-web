import { CardMedia } from '@material-ui/core'
import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 110px;
  z-index: 30;

  display: flex;
  text-align: center;
  border: 1px solid #e8e8e8;
  &:hover {
    opacity: 0.9;
    cursor: pointer;
  }
  position: relative;
`
export const ImgPreview = styled(CardMedia)`
  width: 150px;
  height: 100%;
`
export const Subtitle = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  color: '#0F1639';
  font-size: 16pt;
  font-weight: 800;
  word-wrap: break-word;
`
export const TextSubtitle = styled.h5`
  justify-items: center;
  align-items: center;
`

export const CloseButton = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 10px;
  padding: 10px;
`
