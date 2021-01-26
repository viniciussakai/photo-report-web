import React from 'react'
import { BottomContainer, Buttons } from './styles'
import { Button } from 'components/UI'
import { useNavigate } from 'react-router-dom'
import { IReportContext, useReportContext } from 'context/ReportContext'

const Bottom: React.FC = () => {
  const {
    report,
    setReport,
    reportItems
  } = useReportContext() as IReportContext

  const navigate = useNavigate()

  const handleSubmit = () => {
    if (!reportItems.every(item => item.uploadedFile !== undefined)) return

    setReport({
      ...report,
      reportItem: reportItems.map(item => {
        return {
          image: item.uploadedFile?.file,
          subtitle: item.subtitle
        }
      })
    })
    navigate('/report/create/step3')
  }
  return (
    <BottomContainer>
      <Buttons>
        <Button
          color="default"
          onClick={() => navigate('/report/create/step1')}
        >
          Voltar
        </Button>
        <Button onClick={handleSubmit}>Avançar</Button>
      </Buttons>
    </BottomContainer>
  )
}

export default Bottom
