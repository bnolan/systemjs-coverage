/// <reference path="../typings/tsd.d.ts" />

import TSModule from '../src/tsmodule.ts';

describe('my test suite', () => {
  it('does something', () => {
    let t: any = new TSModule;
    expect(t.getText()).to.equal('boop');
  });

  it('is true', () => {
    expect(true).to.equal(true);
  });
});
