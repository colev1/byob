const mockData = require('../../../mockData2');

const createVenue = (knex, venue) => {
  return knex('venues').insert({
    name: venue.name,
    address: venue.address
  }, 'id')
  .then(venueId => {
    let concertPromises = [];

    mockData.mockConcerts.forEach(concert => {
      if(concert.venue === venue.name) {
        concertPromises.push(
          createConcert(knex, {
            band: concert.band,
            date: concert.date,
            venue_id: venueId[0]
          })
        )
      }
    });

    return Promise.all(concertPromises)
  })
};

const createConcert = (knex, concert) => {
  return knex('concerts').insert(concert)
}

exports.seed = (knex, Promise) => {
 return knex('concerts').del()
  .then(() => knex('venues').del())
  .then(() => {
    let venuePromises = [];

    mockData.mockVenues.forEach(venue => {
      venuePromises.push(createVenue(knex, venue));
    })

    return Promise.all(venuePromises)
  })
  .catch(error => console.log(`Error seeding data: ${error}`))
};