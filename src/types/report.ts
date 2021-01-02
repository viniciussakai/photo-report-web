export interface ReportItem {
  subtitle: string
  image?: File
}
export interface Report {
  costumer: number
  reference: string
  location: string
  observation: string
  recomendation: string
  consideration: string
  reportImage?: ReportItem[]
}

export interface IReportItems {
  id: string
  uploadedFile?: {
    file: File
    name: string
    readableSize: number
    preview: string
  }
  subtitle: string
}
