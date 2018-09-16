import {assert} from 'chai';

import readExifData from './read-exif-data';

describe('read exif data', () => {
  it('should return array of objects from object', () => {
    const mockData = {
      key: 'value',
      key1: 'value'
    };

    const array = readExifData(mockData);
    assert.typeOf(array, 'array');
    assert.typeOf(array[0], 'object');
    assert.lengthOf(array, 2);
  });
});