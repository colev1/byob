const mockVenues = [
  {
    name: "Soiled Dove Underground",
    address: '7401 E 1st Ave, Denver, CO 80230',
  }, 
  {
    name: "Cervantes' Masterpiece Ballroom",
    address: '2637 Welton St, Denver, CO 80205'
  }, 
  {
    name: "Larimer Lounge",
    address: '2721 Larimer St, Denver, CO 80205'
  }
]

const mockConcerts = [
  { 
    band: 'Stanley Jordon',
      date: 'Jan 18, 2019',
      venue: 'Soiled Dove Underground'
  },
  { 
    band: 'Lucid Vision',
    date: 'Jan 18, 2019',
    venue: 'Cervantes\' Masterpiece Ballroom'
  },
  { 
    band: 'Dreamers Delight',
    date: 'Jan 12, 2019',
    venue: 'Larimer Lounge'
  }
]

module.exports = {mockVenues, mockConcerts}