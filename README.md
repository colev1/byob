# Concerts API

## Table Of Contents 
* [Description of API](#api-description)
* [Setup](#setup)
* [Contribution Instructions](#contribution-instructions)
* [Venues](#venues)
* [Concerts](#concerts)
* [Contributors](#contributors)


# API Description

This API contains information on 26 concert venues in Denver, Colorado, and 136 concerts that occured at these venues.  Each venue entry contains an address and venue name, while each concert entry contains a date, name of band that performed, and the venue where the concert took place.  The information was gathered using a web scraper on data from [concert archives](https://www.concertarchives.org/locations/denver-co), while addresses of venues were added manually.

#### [Heroku Link](https://byob-concerts.herokuapp.com/)

# Setup 

### Dependencies
* ESLint
* Body Parser
* Express
* Knex
* Postgres
* Chai
* ChaiHTTP
* Mocha

### Setup server
* `$ git clone https://github.com/colev1/byob repo-name`
* cd into repo `$ cd repo-name`
* install dependencies `$ npm install `
* create database in psql named denver_concerts
  * open psql in the terminal `$ psql`
  * create a database `# CREATE DATABASE denver_concerts;`
  * connect to that database `# \c denver_concerts`
* migrate tables outside of psql `$ knex migrate:latest`
* run seeds `$ knex seed:run` 
* you can view both tables while in the database `# SELECT * FROM venues;` & `# SELECT * FROM concerts;`

### Setup testing
* create database in psql named tests
  * open psql in the terminal `$ psql`
  * create a database `# CREATE DATABASE tests;`
  * connect to that database `# \c tests`
* migrate tables outside of psql `$ knex migrate:latest --env test`
* run seeds `$ knex seed:run --env tests` 
* `npm test` to run all tests

# Contribution Instructions

We would love to see your contributions to our repo! Take a look at the issues to see how you can contribute.

* Follow the Setup Instructions listed above
* Create a new branch on your local machine to begin making changes
`git checkout -b branch-name`
* Before creating a pull request of your changes:
  * Rebase to the master branch and address merge conflicts
  * Ensure that your commit messages are concise and descriptive
  * Mention which issue you are addressing in your PR
  * Make sure each new piece of code is tested and all tests are passing: `npm test`
  * Lint all new code: `npm run eslint`
* If you open a pull request that is not yet complete, please indicate WIP in the title


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

### * GET - Get all concerts by specified venue `/api/v1/concerts?venue=venue_id`

This endpoint will return an array that includes all concerts that took place at a venue that is specificied by the user. The venue id in the query corresponds to the venue that is specificied. Each concert in the response contains a `band `, `date`, and `venue` property.

example response: 
```
[
  { 
    band: 'Twenty One Pilots',
    date: 'Nov 19, 2018',
    venue: 'The Pepsi Center' 
  },
  { 
    band: 'Max Frost',
    date: 'Nov 20, 2018',
    venue: 'The Pepsi Center' 
  }
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
