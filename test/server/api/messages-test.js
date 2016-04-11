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
});
