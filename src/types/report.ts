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

export interface IReportItem {
  id: string
  uploadedFile?: IUploadFile
  subtitle: string
}

export interface IUploadFile {
  file: File
  name: string
  readableSize: number
  preview: string
}
