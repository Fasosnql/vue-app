import * as assert from 'assert';

import UploadFilesAdapter from './upload-files.adapter';

describe('Upload file adapter', () => {
  it('should construct an instance of UploadFilesAdapter and init filestack client', () => {
    const uploadFilesAdaper = new UploadFilesAdapter();
    assert.ok(uploadFilesAdaper instanceof UploadFilesAdapter);
    assert.ok(typeof uploadFilesAdaper.client === 'object');
  });

  it('should call getFilesList to return promise', (done) => {
    const uploadFilesAdaper = new UploadFilesAdapter();
    uploadFilesAdaper.getFilesList({}).then((response) => {
      assert.ok(typeof response === 'object');
      done();
    })
  });

  it('should call getExifData to return filestack metadata promise', (done) => {
    const uploadFilesAdaper = new UploadFilesAdapter();
    uploadFilesAdaper.getExifData('id', {policy: '1', signature: '2'}).then(() => {
      done();
    }, (err) => {
      assert.ok(err);
      done();
    })
  });
});