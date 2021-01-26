import React, { useEffect, useRef } from 'react'

import { useNavigate } from 'react-router-dom'
import { getEditorData, saveReport, setEditorData } from 'utils/report'
import { Button } from 'components/UI'
import { Container, FormTwo, EditorContainer, Editor } from './styles'
import { IReportContext, useReportContext } from 'context/ReportContext'

const FormStepThree: React.FC = () => {
  const { report, setReport } = useReportContext() as IReportContext
  const navigate = useNavigate()

  const endTextRef = useRef(null)

  const addToReport = () => {
    const endTextData = getEditorData(endTextRef)

    const endText = JSON.stringify(endTextData, null, 4)

    setReport({
      ...report,
      endText
    })
  }

  const handleSave = () => {
    const endTextData = getEditorData(endTextRef)

    const endText = JSON.stringify(endTextData, null, 4)

    setReport({
      ...report,
      endText
    })

    saveReport(report)
    navigate('/report/')
  }

  useEffect(() => {
    if (report.endText) {
      setEditorData(endTextRef, JSON.parse(report.endText))
    }
  }, [report.endText])

  return (
    <Container>
      <FormTwo onSubmit={handleSave}>
        <EditorContainer>
          <Editor ref={endTextRef} theme="snow" placeholder={'Considerações'} />
        </EditorContainer>
        <Button
          size={'large'}
          onClick={() => {
            addToReport()
            navigate('/report/create/step2')
          }}
          color="default"
        >
          Voltar
        </Button>
        <Button type="submit" size={'large'}>
          Salvar
        </Button>
      </FormTwo>
    </Container>
  )
}

export default FormStepThree
