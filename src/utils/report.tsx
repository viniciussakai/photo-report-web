import React from 'react'
import ReactQuill from 'react-quill'
import { DeltaStatic } from 'quill'

export const isValidData = (editorData: DeltaStatic | undefined) => {
  return editorData?.length() === 1
}

export const getEditorData = (ref: React.RefObject<ReactQuill>) => {
  const editor = ref.current?.getEditor()
  return editor?.getContents()
}
