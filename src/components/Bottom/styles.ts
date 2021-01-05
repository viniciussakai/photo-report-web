import { Paper } from '@material-ui/core'
import styled from 'styled-components'

export const BottomContainer = styled(Paper)`
  position: fixed;
  bottom: 0;
  left: 0;

  display: flex;
  justify-content: flex-end;
  align-items: center;

  padding: 10px 20px;

  height: 60px;
  width: 100%;
`

export const Buttons = styled.div`
  button {
    margin-left: 10px;
    padding: 8px 20px;
  }
`
