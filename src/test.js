/// <reference path="../typings/tsd.d.ts" />

import TSModule from './tsmodule';

describe('my test suite', () => {
  it('does something', () => {
    let t = new TSModule;
    expect(t.getText()).toEqual('boop');
  });

  it('is true', () => {
    expect(true).toEqual(true);
  });
});
