import React, { createContext, useContext, useState } from 'react'
import { Report, IReportItems } from 'types/report'

export type IReportContext = {
  report: Report
  setReport: React.Dispatch<React.SetStateAction<Report>>
  reportItems: IReportItems[]
  setReportItems: React.Dispatch<React.SetStateAction<IReportItems[]>>
  selectedItem: number
  setSelectedItem: React.Dispatch<React.SetStateAction<number>>
}

const ReportContext = createContext({})
const ReportProvider: React.FC = ({ children }) => {
  const [report, setReport] = useState<Report>({
    reference: '',
    location: '',
    observation: '',
    recomendation: '',
    consideration: '',
    costumer: 0
  })
  const [reportItems, setReportItems] = useState<IReportItems[]>([])
  const [selectedItem, setSelectedItem] = useState(-1)

  return (
    <ReportContext.Provider
      value={{
        report,
        setReport,
        reportItems,
        setReportItems,
        selectedItem,
        setSelectedItem
      }}
    >
      {children}
    </ReportContext.Provider>
  )
}

export default ReportProvider

export const useReportContext = () => {
  const context = useContext(ReportContext)
  return context
}
