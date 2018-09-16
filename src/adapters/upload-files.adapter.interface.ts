export interface filesList {
  id: number,
  name: string,
  type: string,
  thumbnailURL?: string,
  hasExifData: boolean,
  exifData: object,
  progressData: object,
  url: string,
  size: number,
  speed: number
}

export interface uploadFilesInterface {
  client: object,
  getFilesList(filesProp): Promise<filesList[]>
}

export interface filestackSecurity {
  policy: string,
  signature: string
}