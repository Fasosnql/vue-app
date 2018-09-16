export interface filesList {
  id: number,
  name: string,
  type: string,
  thumbnailURL?: string,
  exifData: object,
  progressData: object,
  url: string
}

export interface uploadFilesInterface {
  client: object,
  getFilesList(filesProp): Promise<filesList[]>
}

export interface filestackSecurity {
  policy: string,
  signature: string
}