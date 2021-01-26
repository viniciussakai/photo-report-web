export interface ReportItem {
  subtitle: string
  image?: File
}
export interface Report {
  id: number
  costumer: number
  title: string
  requester: string
  reference: string
  location: string
  startText: string
  endText: string
  reportItem?: ReportItem[]
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
