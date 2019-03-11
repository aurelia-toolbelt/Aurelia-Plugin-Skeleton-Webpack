import {App} from '../../src/app';
declare var expect : any;

describe('the app', () => {
  it('says hello', () => {
    expect(new App().message).toBe('Hello World!');
  });
});
