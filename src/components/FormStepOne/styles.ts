import styled from 'styled-components'
import { Form } from '@unform/web'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

export const Container = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  justify-content: center;
`

export const FormOne = styled(Form)`
  width: 60%;
  height: 100%;

  padding: 50px 100px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const Inputs = styled.div`
  display: flex;
  flex-direction: column;
`

export const EditorContainer = styled.div`
  width: 100%;
  display: flex;
  height: 200px;
  margin-bottom: 15px;
`
export const Editor = styled(ReactQuill)`
  width: 100%;
  height: 100%;
`
