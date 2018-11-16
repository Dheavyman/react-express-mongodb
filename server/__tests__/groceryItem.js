import dotenv from 'dotenv';
import supertest from 'supertest';
import chai from 'chai';
import mongoose from 'mongoose';

import app from '../main';

dotenv.config();

const server = supertest.agent(app);
const expect = chai.expect;

let itemId1;
let itemId2;

describe('Grocery items', () => {
  before(done => {
    mongoose.connect('mongodb://localhost/groceryTest', {
      useNewUrlParser: true
    });
    const db = mongoose.connection;

    db.on('error', console.error.bind(console, 'connection error'));
    db.once('open', () => {
      console.log('We are connected to test database!');
      done();
    });
  });
  after(done => {
    mongoose.connection.db.dropDatabase(() => {
      mongoose.connection.close(done);
    });
  });
  describe('get all grocery items API', () => {
    it('should get all grocery items', done => {
      server.get('/api/items')
        .set('Connection', 'keep alive')
        .set('Accept', 'application/json')
        .end((err, res) => {
          expect(res.statusCode).to.equal(200);
          expect(res.body.status).to.equal('success');
          expect(res.body.message).to.equal('Grocery items retrieved');
          expect(res.body.data).to.be.an('array');
          done();
        })
    });
  });
  describe('add grocery item API', () => {
    it('should add grocery item', done => {
      server.post('/api/items')
        .set('Connection', 'keep alive')
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .send({ name: 'Burger'})
        .end((err, res) => {
          itemId1 = res.body.data._id;

          expect(res.statusCode).to.equal(201);
          expect(res.body.status).to.equal('success');
          expect(res.body.message).to.equal('Grocery item added');
          expect(res.body.data).to.be.an('object');
          expect(res.body.data.name).to.equal('Burger');
          expect(res.body.data.purchased).to.equal(false);
          done();
        })
    });
    it('should add another grocery item', done => {
      server.post('/api/items')
        .set('Connection', 'keep alive')
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .send({ name: 'Milk'})
        .end((err, res) => {
          itemId2 = res.body.data._id;

          expect(res.statusCode).to.equal(201);
          expect(res.body.status).to.equal('success');
          expect(res.body.message).to.equal('Grocery item added');
          expect(res.body.data).to.be.an('object');
          expect(res.body.data.name).to.equal('Milk');
          expect(res.body.data.purchased).to.equal(false);
          done();
        })
    });
  });
  describe('update grocery item API', () => {
    it('should update grocery item', done => {
      server.put(`/api/items/${itemId1}`)
        .set('Connection', 'keep alive')
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .send({ name: 'Burger', purchased: true })
        .end((err, res) => {
          expect(res.statusCode).to.equal(200);
          expect(res.body.status).to.equal('success');
          expect(res.body.message).to.equal('Grocery item updated');
          expect(res.body.data).to.be.an('object');
          expect(res.body.data.purchased).to.equal(true);
          done();
        })
    });
    it('should return an error with invalid grocery item type', done => {
      server.put('/api/items/notValid')
        .set('Connection', 'keep alive')
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .send({ name: 'Burger', purchased: true })
        .end((err, res) => {
          expect(res.statusCode).to.equal(500);
          expect(res.body.status).to.equal('error');
          expect(res.body).to.have.a.property('message');
          done();
        })
    });
  });
  describe('delete grocery item API', () => {
    it('should delete a grocery item', done => {
      server.delete(`/api/items/${itemId2}`)
        .set('Connection', 'keep alive')
        .set('Accept', 'application/json')
        .end((err, res) => {
          expect(res.statusCode).to.equal(200);
          expect(res.body.status).to.equal('success');
          expect(res.body.message).to.equal('Grocery item removed');
          done();
        })
    });
    it('should return error if grocery item does not exist', done => {
      server.delete('/api/items/5a3e8f9807289e839cedba03')
        .set('Connection', 'keep alive')
        .set('Accept', 'application/json')
        .end((err, res) => {
          expect(res.statusCode).to.equal(404);
          expect(res.body.status).to.equal('error');
          expect(res.body.message).to.equal('Grocery item does not exist');
          done();
        })
    });
  });
});
