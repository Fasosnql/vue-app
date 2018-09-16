import {assert as chaiAssert} from 'chai';

import App from './index';

describe('App container', () => {
  it('should be have created function', () => {
    chaiAssert.typeOf(App.created, 'function');
  });

  it('should be correct default data', () => {
    chaiAssert.typeOf(App.data, 'function');
    const data = App.data();

    chaiAssert.property(data, 'uploadFilesAdapter');
    chaiAssert.property(data, 'filesList');
    chaiAssert.property(data, 'uploading');
    chaiAssert.property(data, 'loading');
  });
});