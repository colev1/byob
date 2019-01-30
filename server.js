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

//create a new venue
app.post('/api/v1/venues', (request, response) => {
  const venue = request.body
  for(let requiredParameter of ['name', 'address']) {
    if(!venue[requiredParameter]) {
      return response.status(422)
        .send({error: `Expected format: {name: <String>, address: <String>}. You are missing a required parameter of ${requiredParameter}.`})
    }
  }
  database('venues').insert(venue, 'id')
    .then(venueId => {
      response.status(201).json({...venue, id: venueId[0]})
    })
    .catch(error => {
      response.status(500).json({error})
    })
})

//Create a new concert
app.post('/api/v1/venues/:id/concerts', (request, response) => {
  const venueId = parseInt(request.params.id)
  const concert = {...request.body, venue_id: venueId}

  for(let requiredParameter of ['band', 'date']) {
    if(!concert[requiredParameter]) {
      return response.status(422)
        .send({error: `Expected format: {band: <String>, date: <String>}. You are missing a required parameter of ${requiredParameter}.`})
    }
  }
  database('concerts').insert(concert, 'id')
    .then(concertId => {
      response.status(201).json({...concert, id: concertId[0]})
    })
    .catch(error => {
      response.status(500).json({error})
    })
})

//Update an existing venue
app.put('/api/v1/venues/:id', (request, response) => {
  const venueId = parseInt(request.params.id)  
  const venue = request.body

  database('venues')
    .where('id', venueId)
    .update({name: venue.name, address: venue.address})
    .then(() => {
      response.status(202).json({...venue, id: venueId})
    })
    .catch(error => {
      response.status(422).json({error})
    })
})

//Update an existing concert
app.put('/api/v1/concerts/:id', (request, response) => {
  const concertId = parseInt(request.params.id)
  const concert = request.body
  
  database('concerts')
    .where('id', concertId)
    .update({band: concert.band, date: concert.date})
    .then(() => {
      response.status(202).json({...concert, id: concertId})
    })
    .catch(error => {
      response.status(422).json({error})
    })
})

//Delete an existing venue
app.delete('/api/v1/venues/:id', (request, response) => {
  const venueId = parseInt(request.params.id)

  database('concerts')
    .where('venue_id', venueId)
    .del()
    .then((concerts) => {
      response.status(202).json({concerts})
    })

  database('venues')
    .where('id', venueId)
    .del()
    .then((venue) => {
      response.status(202).json({venue})
    })
    .catch(error => {
      response.status(501).json({error})
    })
})

//delete a concert
app.delete('/api/v1/concerts/:id', (request, response) => {
  const concertId = parseInt(request.params.id)

  database('concerts')
    .where('id', concertId)
    .del()
    .then((concert) => {
      response.status(202).json({id: concertId})
    })
    .catch(error => {
      response.status(501).json({error})
    })
})


module.exports = app;
