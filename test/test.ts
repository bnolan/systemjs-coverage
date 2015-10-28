/// <reference path="../typings/tsd.d.ts" />

'use strict';

import TSModule from '../src/tsmodule.ts';

describe('my test suite', () => {
  it('does something', () => {
    let t: any = new TSModule;
    expect(t.getText()).toEqual('boop');
  });

  it('is true', () => {
    expect(true).toEqual(true);
  });
});
