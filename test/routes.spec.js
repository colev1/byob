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
      database.seed.run()
    done();
  });

  describe('/api/v1/venues', () => {
    it('GET: should return all of the venues', () => {
      chai.request(server)
      .get('/api/v1/venues')
      .end((err, response) => {
        response.should.have.status(200)
        response.should.be.json
        response.should.be.a('array')
        response.body.length.should.equal(3)
        response.body[0].should.have.property('name')
        response.body[0].should.have.property('address')
        response.body[0].should.have.property('id')
        done()
      })
    })

    it('posts successfully', () => {
      
    })
    it('post sad path', () => {
      
    })
  })

  describe('/api/v1/concerts', () => {
    it('GET: should return all of the concerts', () => {

    })

    it('posts successfully', () => {
      
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