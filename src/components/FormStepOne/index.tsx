import React, { useEffect, useRef, useState } from 'react'
import { useReportContext, IReportContext } from 'context/ReportContext'
import { useNavigate } from 'react-router-dom'
import { SubmitHandler } from '@unform/core'
import api from '../../service/api'

import { Button } from 'components/UI'
import { ICostumer } from 'types/costumer'
import Input from 'components/InputUnform'
import Select from 'components/SelectUnform'
import { getEditorData, setEditorData } from 'utils/report'

import { Container, Editor, EditorContainer, FormOne, Inputs } from './styles'

interface FormData {
  costumer: string
  reference: string
  location: string
}

const FormStepOne: React.FC = () => {
  const { report, setReport } = useReportContext() as IReportContext

  const editorRef = useRef(null)
  const navigate = useNavigate()

  const [costumers, setCostumers] = useState([])
  const handleSubmit: SubmitHandler<FormData> = data => {
    const startTextData = getEditorData(editorRef)

    const { costumer, location, reference } = data

    const startText = JSON.stringify(startTextData, null, 4)

    setReport({
      ...report,
      costumer: Number(costumer),
      location,
      reference,
      startText
    })

    navigate('/report/create/step2')
  }

  useEffect(() => {
    if (report.startText) {
      setEditorData(editorRef, JSON.parse(report.startText))
    }

    async function fetchCostumers() {
      try {
        const fetchCostumers = await api.get('/costumer')
        setCostumers(fetchCostumers.data)
      } catch {}
    }
    fetchCostumers()
  }, [report.startText])

  return (
    <Container>
      <FormOne onSubmit={handleSubmit}>
        <Inputs>
          <Select
            name="costumer"
            options={costumers.map((costumer: ICostumer) => ({
              label: costumer.name,
              value: `${costumer.id}`
            }))}
            placeholder={'Cliente'}
            isSearchable
          />
          <Input
            name="title"
            label="Titulo"
            variant="outlined"
            defaultValue={report.title}
          />
          <Input
            name="requester"
            label="Solicitante"
            variant="outlined"
            defaultValue={report.requester}
          />
          <Input
            name="location"
            label="Local"
            variant="outlined"
            defaultValue={report.location}
          />
          <Input
            name="reference"
            label="Referencia"
            variant="outlined"
            defaultValue={report.reference}
          />
        </Inputs>
        <Button type="submit" size={'large'}>
          Avançar
        </Button>
      </FormOne>
      <EditorContainer>
        <Editor ref={editorRef} theme="snow" placeholder={'Texto Inicial'} />
      </EditorContainer>
    </Container>
  )
}

export default FormStepOne
