import {expect} from "chai";
import request from "supertest";
import express from "express";
import api from "../../../src/server/api";

const app = express();
app.use(api);

describe('/messages', () => {
  describe('GET /messages', () => {
    it('should send a JSON array of messages', done => {
      request(app)
          .get('/messages')
          .expect('Content-Type', /json/)
          .expect(res => {
            expect(res.body).to.be.instanceOf(Array);
          })
          .end(done);
    });

    it('should allow Accept header "content/json"', done => {
      request(app)
          .get('/messages')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200, done);
    });

    // TODO deal with this (hehehe)
    // it('should not allow Accept header "application/xml"', done => {
    //   request(app)
    //       .get('/messages')
    //       .set('Accept', 'application/json')
    //       .expect(400, done);
    // });
  });

  describe('POST /messages', () => {
    it('should return the new message object', done => {
      const message = {
        name: 'Martin',
        email: 'martin@westerdals.no',
        message: 'Hi, there!'
      };

      request(app)
          .post('/messages')
          .send(message)
          .expect(201)
          .expect(message, done);
    });

    it('should fail on missing fields', done => {
      const message = {
        name: undefined,
        email: undefined,
        message: undefined
      };

      request(app)
          .post('/messages')
          .send(message)
          .expect(400, done);
    });
  });
});
