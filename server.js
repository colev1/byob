const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);
const express = require('express')

const app = express();
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.set('port', process.env.PORT || 3000)

app.listen(app.get('port'), () => {
  console.log(`BYOB is running on ${app.get('port')}`)
})

//get all venues
app.get('/api/v1/venues', (request, response) => {
  database('venues').select()
    .then(venues => {
      response.status(200).json(venues)
    })
    .catch(error => {
      response.status(500).json({error})
    })
})

//get all concerts
app.get('/api/v1/concerts', (request, response) => {
  database('concerts').select()
    .then(concerts => {
      response.status(200).json(concerts)
    })
    .catch(error => {
      response.status(500).json({error})
    })
})

//get specific venue by id
app.get('/api/v1/venues/:id', (request, response) => {
  const id = request.param('id');
  database('venues').where('id', id)
    .then(venue => {
      response.status(200).json(venue)
    })
    .catch(error => {
      response.status(500).json({error})
    })
})

//get specific concert
app.get('/api/v1/concerts/:id', (request, response) => {
  const id = request.param('id');
  database('concerts').where('id', id)
    .then(concert => {
      response.status(200).json(concert)
    })
    .catch(error => {
      response.status(500).json({error})
    })
})