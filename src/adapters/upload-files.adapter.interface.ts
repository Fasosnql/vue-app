export interface filesList {
  id: number,
  name: string,
  type: string,
  thumbnailURL?: string
}

export interface uploadFilesInterface {
  client: object,
  getFilesList(filesProp): Promise<filesList[]>
}