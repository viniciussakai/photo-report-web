import React, { useRef } from 'react'

import { useNavigate } from 'react-router-dom'
import { getEditorData, saveReport } from 'utils/report'
import { Button } from 'components/UI'
import { Container, FormTwo, EditorContainer, Editor, Editors } from './styles'
import { IReportContext, useReportContext } from 'context/ReportContext'

const FormStepThree: React.FC = () => {
  const { report, setReport } = useReportContext() as IReportContext
  const navigate = useNavigate()

  const considerationRef = useRef(null)
  const recomendationRef = useRef(null)

  const handleSave = async () => {
    const considerationData = getEditorData(considerationRef)
    const recomendationData = getEditorData(recomendationRef)

    const recomendation = JSON.stringify(recomendationData, null, 4)
    const consideration = JSON.stringify(considerationData, null, 4)

    setReport({
      ...report,
      consideration,
      recomendation
    })

    saveReport(report)

    navigate('/report/')
  }
  return (
    <Container>
      <FormTwo onSubmit={handleSave}>
        <Editors>
          <EditorContainer>
            <Editor
              ref={considerationRef}
              theme="snow"
              placeholder={'Considerações'}
            />
          </EditorContainer>
          <EditorContainer>
            <Editor
              ref={recomendationRef}
              theme="snow"
              placeholder={'Recomendações'}
            />
          </EditorContainer>
        </Editors>
        <Button type="submit" size={'large'}>
          Salvar
        </Button>
      </FormTwo>
    </Container>
  )
}

export default FormStepThree
