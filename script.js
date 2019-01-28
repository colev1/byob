const Nightmare = require('nightmare')
const nightmare = Nightmare({ show: true })

nightmare
  .goto('https://www.concertarchives.org/locations/denver-co')
  .wait(1000)
  .evaluate( function() {
    var table = document.querySelector('div.table-responsive')
    var rows = table.querySelectorAll('tr')
    var list = []
   for(var i=1; i<rows.length; i++) {
    var concertName = rows[i].children[1].innerText
    var concertVenue = rows[i].children[2].innerText
    var concert = {
      concertName, concertVenue
    }
    list.push(concert)
  }
  return list;
})
  .end()
  .then(function(result) {
    console.log(result);
  })
  .catch(error => {
    console.error('Search failed:', error)
  })