import * as filestack from 'filestack-js';

import {
  uploadFilesInterface,
  filesList,
  filestackSecurity
} from './upload-files.adapter.interface';

import config from 'configs/config';
import fileTypes from 'configs/fileTypes';

export default class UploadFilesAdapter implements uploadFilesInterface {
  public client;
  private filesProp;

  constructor() {
    this.client = filestack.init(config.filestackKey);
  }

  public getFilesList(filesProp):Promise<filesList[]> {
    this.filesProp = filesProp;
    const files:any = Array.from(filesProp);

    return this.processFilesList(files);
  }

  public uploadFile(file, onProgress):Promise<any> {
    const fileToUpload = this.filesProp.item(file.id);

    return this.client.upload(fileToUpload, { onProgress });
  }

  public getExifData(handle: string, security: filestackSecurity) {
    return this.client.metadata(handle, {exif: true}, security);
  }

  private async processFilesList(files):Promise<filesList[]> {
    const returnArr = [];
    let index = 0;

    for (const file of files) {
      returnArr.push({
        id: index,
        name: file.name,
        type: file.type,
        progressData: {},
        hasExifData: false,
        exifData: {},
        url: '',
        size: file.size,
        speed: 0
      });

      if (fileTypes.image.indexOf(file.type) !== -1) {
        returnArr[index].thumbnailURL = await this.getImageSrc(file);
      }

      index += 1;
    }

    return returnArr;
  }

  private getImageSrc(image) {
    return this.onReadFile(image).then((response: any) => {
      return response.target.result;
    })
  }

  private onReadFile(file) {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = (ev: any) => {
        resolve(ev);
      };
      reader.readAsDataURL(file);
    })
  }
}