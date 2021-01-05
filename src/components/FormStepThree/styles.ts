import styled from 'styled-components'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

export const Container = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  justify-content: center;
`

export const FormTwo = styled.form`
  width: 60%;
  height: 100%;

  padding: 50px 100px;

  display: flex;
  flex-direction: column;
`
export const Editors = styled.div`
  display: flex;
  height: 100%;
  margin-bottom: 80px;
  flex-direction: column;
  justify-content: space-between;
`

export const EditorContainer = styled.div`
  width: 100%;
  height: 150px;
  margin-bottom: 20px;
`
export const Editor = styled(ReactQuill)`
  width: 100%;
  height: 100%;
`
