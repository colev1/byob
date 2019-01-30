const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
const server = require('../server');
const environment = process.env.NODE_ENV || 'test';
const configuration = require('../knexfile')[environment];
const database = require('knex')(configuration);

chai.use(chaiHttp);

describe('API Routes', () => {
  before(done => {
    database.migrate.rollback()
    .then(() => {
      database.migrate.latest()
    })
    .then(() => {
       database.seed.run()
    })
    .then(() => {
      done();
    })
  });
  
  beforeEach(done => {
    database.migrate.rollback()
    .then(() => {
      database.migrate.latest()
    })
    .then(() => {
      database.seed.run()
    })
    .then(() => {
      done();
    });
  });

  describe('/api/v1/venues', () => {
    it('GET: should return all of the venues', () => {

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

