import { expect } from 'chai';
import Message from '../../src/server/Message.js';

describe('Message', () => {
  it('should export a Message class', () => {
    expect(Message).not.to.be.an('undefined');
    expect(Message).to.be.a('function');
  });

  it('should set parameters properly', () => {
    const name = 'Martin';
    const email = 'martin@westerdals.no';
    const message = 'Hi there';

    const result = new Message(name, email, message);
    expect(result.name).to.equal(name);
    expect(result.email).to.equal(email);
    expect(result.message).to.equal(message);
  });
});
