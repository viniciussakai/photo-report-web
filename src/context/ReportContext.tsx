import React, { createContext, useContext, useState } from 'react'
import { Report, IReportItem } from 'types/report'

export type IReportContext = {
  report: Report
  setReport: React.Dispatch<React.SetStateAction<Report>>
  reportItems: IReportItem[]
  setReportItems: React.Dispatch<React.SetStateAction<IReportItem[]>>
  selectedItem: number
  setSelectedItem: React.Dispatch<React.SetStateAction<number>>
}

const ReportContext = createContext({})
const ReportProvider: React.FC = ({ children }) => {
  const [report, setReport] = useState<Report>({
    id: 0,
    costumer: 0
  } as Report)

  const [reportItems, setReportItems] = useState<IReportItem[]>([])
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
