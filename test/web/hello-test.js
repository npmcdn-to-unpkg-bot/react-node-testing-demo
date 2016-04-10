import { expect } from 'chai';
import hello from '../../src/web/hello.js';

describe('greeting', () => {
  it('greets on the form "Hello, {name}!"', () => {
    const name = 'Martin';
    const result = hello(name);

    expect(result).to.equal('Hello, ' + name + '!');
  });
});
