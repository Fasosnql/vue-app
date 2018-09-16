import {assert} from 'chai';

import calculateSpeedUpload from './calculate-speed-upload';

describe('calculate speed upload', () => {
  it('should return a number', () => {
    const calculatedSpeed = calculateSpeedUpload(10000, 10, 10000, 5);
    assert.typeOf(calculatedSpeed, 'number');
  });
});