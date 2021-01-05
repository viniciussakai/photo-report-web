import React from 'react'
import ReactQuill from 'react-quill'
import { DeltaStatic } from 'quill'
import api from 'service/api'
import { Report, ReportItem } from 'types/report'

export const isValidData = (editorData: DeltaStatic | undefined) => {
  return editorData?.length() === 1
}

export const getEditorData = (ref: React.RefObject<ReactQuill>) => {
  const editor = ref.current?.getEditor()
  return editor?.getContents()
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
      consideration,
      location,
      observation,
      recomendation,
      reference,
      reportImage
    } = report

    formData.append('costumer', costumer.toString())
    formData.append('reference', reference)
    formData.append('location', location)
    formData.append('observation', observation)
    formData.append('recomendation', recomendation)
    formData.append('consideration', consideration)
    if (reportImage) {
      reportImage.forEach(item => appendItem(item, formData))
    }

    await api.post('/report', formData)
  } catch (e) {
    console.log(e)
  }
}
