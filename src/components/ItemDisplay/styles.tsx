import { Paper } from '@material-ui/core'
import styled from 'styled-components'

export const ImageSelector = styled.div`
  height: 100%;
  padding: 20px;
`

export const ImageContainer = styled(Paper)`
  position: relative;
  width: 100%;
  height: 90%;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  border: 2px solid #dfdfdf;
  border-radius: 4px;
`
export const Image = styled.img`
  width: 50%;
  height: 100%;
`
