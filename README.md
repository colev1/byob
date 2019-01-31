# Concerts API

## Table Of Contents 
* [Description of API](#api-description)
* [Setup](#setup)
* [Venues](#venues)
* [Concerts](#concerts)
* [Contributors](#contributors)


# API Description

This API contains information on 26 concert venues in Denver, Colorado, and 136 concerts that occured at these venues.  Each venue entry contains an address and venue name, while each concert entry contains a date, name of band that performed, and the venue where the concert took place.  The information was gathered using a web scraper on data from https://www.concertarchives.org/locations/denver-co.

# Setup 

### Setup server
* `$ git clone https://github.com/colev1/byob byob`
* cd into repo
* install dependencies
* `$ npm install `
* create database in psql named denver_concerts
* `$ knex seed:run` 

### Setup testing
* create database in psql named tests
* `$ knex seed:run --env test`
* `npm test` to run tests

# VENUES

### * GET - Get all venues `/api/v1/venues`

This endpoint will return an array of all venue objects.

example response: 
```
[
  {
    "name": "Soiled Dove Underground",
    "address": '7401 E 1st Ave, Denver, CO 80230',
  }, 
  {
    "name": "Cervantes' Masterpiece Ballroom",
    "address": '2637 Welton St, Denver, CO 80205'
  } 
  ...
] 
```

### * GET - Get specific venue `/api/v1/venues/:id`

This endpoint will return an array a single venue object. The id of the venue is contained in the path. 

example response: 
```
{
 "name": "Soiled Dove Underground",
 "address": '7401 E 1st Ave, Denver, CO 80230',
} 
 ```

### * POST - Post a new venue `/api/v1/venues`

This endpoint allows users to add a new venue to the database.  The request must contain a `name` and `address` property in order for the post to be successful. If these properties are not included, an error with status code 422 will be returned.

example request: 
```
{   
 "name": "The Pepsi Center",
 "address": "1000 Chopper Cir, Denver, CO"
}
```
  
### * PUT - Update an existing venue `/api/v1/venues/:id`

This endpoint allows users to update an existing venue in the database. The request should contain a `name` and `address` property.

example request: 
```
{  
  "name": "The Pepsi Center",
  "address": "123 Denver St."
  }
```

### * DELETE - Delete an existing venue `/api/v1/venues/:id`

This endpoint allows users to delete an existing venue in the database. The id of the venue to be deleted is a params of the request. If there is an error, a response with status 501 should be returned.

# CONCERTS

### * GET - Get all concerts `/api/v1/concerts`

This endpoint will return an array that includes all concert objects. Each concert object contains a `band `, `date`, and `venue` property.

example response: 
```
[
  { 
    "band": 'Smash Mouth',
    "date": 'Sep 03, 2018',
    "venue": 'Civic Center Park'
  },
  { 
    "band": 'Cyanotic',
    "date": 'Sep 01, 2018',
    "venue": '3 Kings Tavern'
  } 
  ...
] 
```

### * GET - Get specific concert `/api/v1/concerts/:id`

This endpoint will return an array a single concert. The id of the concert is contained in the path. 

example response: 
```
 { 
    "band": 'Bruno Mars',
    "date": 'Sep 07, 2018',
    "venue": 'The Pepsi Center' 
 } 
```

### * POST - Create a new concert `/api/v1/venues/:id/concerts`

This endpoint allows users to add a new concert to the database to a specific venue.  The request must contain a `band` and `date` property in order for the post to be successful. If these properties are not included, an error with status code 500 will be returned.

example request: 
```
{ 
    "band": "Dead Kennedys",
    "date": "Sep 07, 2018"
  }
```
  
### * POST - Update an existing concert `/api/v1/concerts/:id`

This endpoint allows users to update an existing concert in the database. The request should contain a `band` and `date` property.

example request: 
```
{   
   "band": "Maroon 5",
   "address": "01/01/10"
  }
```

### * DELETE - Delete an existing venue `/api/v1/concerts/:id`

This endpoint allows users to delete an existing concert in the database. The id of the concert to be deleted is a params of the request. If there is an error, a response with status 501 should be returned.

# Contributors
* Cole Vanacore @colev1
* Kaylee Bunce @kayleenovak 
