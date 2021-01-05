import React, { useEffect, useRef, useState } from 'react'
import { useReportContext, IReportContext } from 'context/ReportContext'
import { useNavigate } from 'react-router-dom'
import { SubmitHandler } from '@unform/core'
import api from '../../service/api'

import { Button } from 'components/UI'
import { ICostumer } from 'types/costumer'
import Input from 'components/InputUnform'
import Select from 'components/SelectUnform'
import { getEditorData } from 'utils/report'

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
    const observationData = getEditorData(editorRef)

    const { costumer, location, reference } = data

    const observation = JSON.stringify(observationData, null, 4)

    setReport({
      ...report,
      costumer: Number(costumer),
      location,
      reference,
      observation
    })

    navigate('/report/create/step2')
  }

  useEffect(() => {
    async function fetchCostumers() {
      try {
        const fetchCostumers = await api.get('/costumer')
        setCostumers(fetchCostumers.data.costumers)
      } catch (e) {}
    }
    fetchCostumers()
  }, [])

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
          <Input name="location" label="Local" variant="outlined" />
          <Input name="reference" label="Referencia" variant="outlined" />
          <EditorContainer>
            <Editor
              ref={editorRef}
              theme="snow"
              placeholder={'Texto Inicial'}
            />
          </EditorContainer>
        </Inputs>
        <Button type="submit" size={'large'}>
          Avançar
        </Button>
      </FormOne>
    </Container>
  )
}

export default FormStepOne
