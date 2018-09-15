import * as filestack from 'filestack-js';

import {
  uploadFilesInterface,
  filesList
} from './upload-files.adapter.interface';

import config from 'configs/config';
import fileTypes from 'configs/fileTypes';

export default class UploadFilesAdapter implements uploadFilesInterface {
  public client:object;

  constructor() {
    this.client = filestack.init(config.filestackKey);
  }

  public getFilesList(filesProp):Promise<filesList[]> {
    const files:any = Array.from(filesProp);

    return this.processFilesList(files);
  }

  private async processFilesList(files):Promise<filesList[]> {
    const returnArr = [];
    let index = 0;

    for (let file of files) {
      returnArr.push({
        id: index,
        name: file.name,
        type: file.type
      });

      if (fileTypes.image.indexOf(file.type) !== -1) {
        returnArr[index].thumbnailURL = await this.getImageSrc(file);
      }

      index++;
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