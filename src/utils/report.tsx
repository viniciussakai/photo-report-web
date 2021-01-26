import React from 'react'
import ReactQuill from 'react-quill'
import { DeltaStatic } from 'quill'
import api from 'service/api'
import { Report, ReportItem } from 'types/report'

export const isValidData = (editorData: DeltaStatic | undefined) => {
  return editorData?.length() === 1
}

export const getEditorData = (ref: React.RefObject<any>) => {
  const editor = ref.current.getEditor()
  return editor.getContents()
}

export const setEditorData = (
  ref: React.RefObject<ReactQuill>,
  editorData: DeltaStatic
) => {
  const editor = ref.current?.getEditor()
  return editor?.setContents(editorData)
}
const appendItem = (item: ReportItem, formData: FormData) => {
  const arquivo = item.image || 'sem-imagem'
  formData.append('files', arquivo, item.image?.name)
  formData.append('subtitles', item.subtitle)
}

export const saveReport = async (report: Report) => {
  try {
    const formData = new FormData()
    const {
      costumer,
      reference,
      requester,
      title,
      location,
      startText,
      endText,
      reportItem
    } = report

    formData.append('costumer', costumer.toString())
    formData.append('requester', requester)
    formData.append('title', title)
    formData.append('reference', reference)
    formData.append('location', location)
    formData.append('startText', startText)
    formData.append('endText', endText)
    if (reportItem) {
      reportItem.forEach(item => appendItem(item, formData))
    }

    await api.post('/report', formData)
  } catch (e) {
    console.log(e)
  }
}
