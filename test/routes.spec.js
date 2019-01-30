const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
const server = require('../server.js');
const configuration = require('../knexfile')['test'];
const database = require('knex')(configuration);

chai.use(chaiHttp);

describe('API Routes', () => {
  
      beforeEach(done => {
        database.migrate.rollback()
          .then(() => {
            database.migrate.latest()
              .then(() => {
                return database.seed.run()
                  .then(() => {
                    done();
                  })
              })
          })
      })

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
    
    it('GET: should return all of the concerts', (done) => {
      chai.request(server)
      .get('/api/v1/concerts')
      .end((err, response) => {
        response.should.have.status(200)
        response.should.be.json
        response.body.should.be.a('array')
        response.body.length.should.equal(2)
        response.body[0].should.have.property('id')
        response.body[0].should.have.property('band')
        response.body[0].should.have.property('date')
        done()
      })
    })

    it('POST: posts new concert successfully', (done) => {
      chai.request(server)
      .post('/api/v1/venues/1/concerts')
      .send({
        "band": "Beyonce",
        "date": "01/01/01"
      })
      .end((err, response) => {
        response.should.have.status(201)
        response.should.be.json
        response.body.should.be.a('object')
        response.body.should.have.property('id')
        response.body.should.have.property('band')
        response.body.band.should.equal('Beyonce')
        response.body.should.have.property('date')
        response.body.date.should.equal('01/01/01')
        response.body.should.have.property('venue_id')
        done()
      })
    })

    it('post sad path', done => {
      done()
    })
  })


  describe('/api/v1/venues/:id', () => {

    let mockReq = {
      "name": "Venue1",
      "address": "1 Street"
    }
    let incorrectReq = {
      "name": "Venue2"
    }

    it('should return status of 202 if put is successful', done => {
      chai.request(server)
      .put('/api/v1/venues/800')
      .send(mockReq)
      .end((err, response) => {
      response.should.have.status(202)
      response.should.be.json
      response.should.be.a('object')
      response.body.should.have.property('name')
      response.body.should.have.property('address')
      response.body.should.have.property('id')
      done()
      })
    })

    it('should return status 404 if put does not include venue id', done => {
      chai.request(server)
      .put('/api/v1/venues/')
      .send(incorrectReq)
      .end((err, response) => {
      response.should.have.status(404)
      done()
      })
    })
  
    it('should delete a venue and return status 202', done => {
      chai.request(server)
      .delete('/api/v1/venues/101')
      .end((err, response) => {
        response.should.have.status(202)
        response.should.be.a('object')
        done()
      })
    })

    it('should return status 404 if delete venue does not have required param', done => {
      chai.request(server)
      .delete('/api/v1/venues/')
      .end((err, response) => {
        response.should.have.status(404)
        done()
    })
  })
})
  
  describe('/api/v1/concert/:id', () => {
    let mockRequest = {
      "band": "Drake",
      "date": "02/01/02",
      venue: '3 Kings Tavern'
    }

    it('should update a concert with response 202', done => {
      chai.request(server)
      .put('/api/v1/concerts/3')
      .send(mockRequest)
      .end((err, response) => {
        response.should.have.status(202)
        response.should.be.json
        response.should.be.a('object')
        response.body.should.have.property('date')
        response.body.should.have.property('band')
        done()
        })
    })
  
    it('successfully deletes a concert', done => {
      chai.request(server)
      .delete('/api/v1/concerts/2')
      .end((err, response) => {
        response.should.have.status(202)
        response.should.be.json
        response.should.be.a('object')
        done()
      })
    })
    it('response has status 404 if the path does not have an id', done => {
      chai.request(server)
      .delete('/api/v1/concerts/')
      .end((err, response) => {
        response.should.have.status(404)
        done()
      })
    })
  })
});

