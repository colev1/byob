const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
const server = require('../server.js');
const environment = process.env.NODE_ENV || 'test';
const configuration = require('../knexfile')[environment];
const database = require('knex')(configuration);

chai.use(chaiHttp);

describe('API Routes', () => {

  before(done => {
    database.migrate.latest()
    .then(() => {
      database.seed.run()
    })
    done();
  });
  
  beforeEach(done => {
    database.migrate.latest()
    .then(() => {
      database.seed.run()
    })
    done();
  });

  describe('/api/v1/venues', () => {
    it('GET: should return all of the venues', done => {
      chai.request(server)
      .get('/api/v1/venues')
      .end((err, response) => {
        response.should.have.status(200)
        response.should.be.json
        response.body.should.be.a('array')
        response.body.length.should.equal(3)
        response.body[0].should.have.property('name')
        response.body[0].should.have.property('address')
        response.body[0].should.have.property('id')
        done()
      })
    })

    it('POST: posts new venue successfully', done => {
      chai.request(server)
      .post('/api/v1/venues')
      .send({
        name: 'Paramount',
        address: '303 W. Colorado St.'
      })
      .end((err, response) => {
        response.should.have.status(201)
        response.should.be.json
        response.body.should.be.a('object')
        response.body.should.have.property('name')
        response.body.should.have.property('address')
        response.body.should.have.property('id')
        done()
      })
    })

    it('post sad path', done => {
      chai.request(server)
      .post('/api/v1/venues')
      .send({
        name: 'Paramount'
      })
      .end((err, response) => {
        response.should.have.status(422)
        response.should.be.json
        response.should.have.property('error')
        response.body.error.should.equal('Expected format: {name: <String>, address: <String>}. You are missing a required parameter of address.')
        done();
      })
    })
  })

  describe('/api/v1/concerts', () => {
    it('GET: should return all of the concerts', () => {
      chai.request(server)
      .get('/api/v1/concerts')
      .end((err, response) => {
        console.log(response.body)
        response.should.have.status(200)
        response.should.be.json
        response.body.should.be.a('array')
        response.body.length.should.equal(3)
        response.body[0].should.have.property('id')
        response.body[0].should.have.property('band')
        response.body[0].should.have.property('date')
        done()
      })
    })

    it('POST: posts new concert successfully', () => {
      chai.request(server)
      .get('/api/v1/venues/3/concerts')
      .send({
        band: 'Beyonce',
        date: '01/01/01'
      })
      .end((err, response) => {
        response.should.have.status(201)
        response.should.be.json
        response.body.should.be.a('object')
        response.body.should.have.property('id')
        response.body.id.should.equal('4')
        response.body.should.have.property('band')
        response.body.band.should.equal('Beyonce')
        response.body.should.have.property('date')
        response.body.data.should.equal('01/01/01')
        response.body.should.have.property('venue_id')
        response.body.venue_id.should.equal(3)
      })
    })

    it('post sad path', () => {
      
    })
  })
});


describe('/api/v1/venues/:id', () => {
  it('PUT: should edit venue data', () => {

  })

  it('deletes a venue', () => {

  })
})

describe('/api/v1/concert/:id', () => {
  
  it('PUT: should edit concert data', () => {

  })

  it('deletes a concert', () => {

  })
})

