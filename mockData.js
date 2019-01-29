const venues = [
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
  }, 
  {
    name: "The Black Box",
    address: '314 E 13th Ave, Denver, CO 80203'
  }, 
  {
    name: "Beta Nightclub",
    address: '1909 Blake St, Denver, CO 80202'
  }, 
  {
    name: "Summit Music Hall",
    address: '1902 Blake St, Denver, CO 80202'
  }, 
  {
    name: "The Fillmore Auditorium",
    address: '1510 N Clarkson St, Denver, CO 80218'
  }, 
  {
    name: "Colorado Convention Center",
    address: '700 14th St, Denver, CO 80202'
  }, 
  { 
    name: "Bluebird Theater",
    address: '3317 E Colfax Ave, Denver, CO 80206'
  }, 
  {
    name: "Globe Hall",
    address: '4483 Logan St, Denver, CO 80216'
  }, 
  {
    name: "Streets of London",
    address: '1501 E Colfax Ave, Denver, CO 80218'
  }, 
  {
    name: "The Ogden Theatre",
    address: '935 E Colfax Ave, Denver, CO 80218'
  }, 
  {
    name: "Ophelia's Electric Soapbox",
    address: '1215 20th St, Denver, CO 80202'
  }, 
  {
    name: "The Paramount Theatre",
    address: '1621 Glenarm Pl, Denver, CO 80202'
  }, 
  {
    name: "The Pepsi Center",
    address: '1000 Chopper Cir, Denver, CO 80204'
  }, 
  {
    name: "The Marquis Theater",
    address: '2009 Larimer St, Denver, CO 80205'
  },  
  {
    name: "The Oriental Theater",
    address: '4335 W 44th Ave, Denver, CO 80212'
  }, 
  {
    name: "Lost Lake Lounge",
    address: '3602 E Colfax Ave, Denver, CO 80206'
  }, 
  {
    name: "Red Rocks Amphitheatre",
    address: '18300 W Alameda Pkwy, Morrison, CO 80465'
  }, 
  {
    name: "Levitt Pavilion",
    address: '1380 W Florida Ave, Denver, CO 80223'
  }, 
  {
    name: "Fiddler's Green Amphitheatre",
    address: '6350 Greenwood Plaza Blvd, Greenwood Village, CO 80111'
  }, 
  {
    name: "Gothic Theatre",
    address: '3263 S Broadway, Englewood, CO 80113'
  }, 
  {
    name: "Overland Park",
    address: '1801 S Huron St, Denver, CO 80223'
  }, 
  {
    name: "7th Circle",
    address: '2935 W 7th Ave, Denver, CO 80204'
  }, 
  {
    name: "BarFly",
    address: '4255 W Colfax Ave Ste. A, Denver, CO 80204'
  }, 
  {
    name: "Civic Center Park",
    address: '101 W. 14th Ave., Denver, CO 80202'
  }, 
  {
    name: "3 Kings Tavern",
    address: '60 S Broadway, Denver, CO 80209'
  }, 
  {
    name: "Union Station",
    address: '1701 Wynkoop, Denver, CO 80202'
  }
]



const concerts = [ { 
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
  },
  { 
    band: 'Prophet',
    date: 'Jan 10, 2019',
    venue: 'The Black Box'
  },
  { 
    band: 'Said The Sky',
    date: 'Jan 03, 2019',
    venue: 'Beta Nightclub'
  },
  { 
    band: 'Less Than Jake with The Lillingtons',
    date: 'Dec 31, 2018',
    venue: 'Summit Music Hall'
  },
  { 
    band: 'New Years Run 2018',
    date: 'Dec 31, 2018',
    venue: 'The Fillmore Auditorium'
  },
  { 
    band: 'Wave Spell Live',
    date: 'Dec 30, 2018',
    venue: 'Summit Music Hall'
  },
  { 
    band: 'Illenium',
    date: 'Dec 31, 2018',
    venue: 'Colorado Convention Center'
  },
  { 
    band: 'DeVotchKa',
    date: 'Dec 30, 2018',
    venue: 'Bluebird Theater'
  },
  { 
    band: 'Slim Cessna\'s Auto Club',
    date: 'Dec 29, 2018',
    venue: 'Globe Hall'
  },
  { 
    band: 'Flatfoot 56  ',
    date: 'Dec 29, 2018',
    venue: 'Streets of London'
  },
  { 
    band: 'New Years Run 2018',
    date: 'Dec 29, 2018',
    venue: 'The Fillmore Auditorium'
  },
  { 
    band: 'Flatfoot 56',
    date: 'Dec 29, 2018',
    venue: 'Streets of London'
  },
  { 
    band: 'New Years Run 2018',
    date: 'Dec 28, 2018',
    venue: 'The Fillmore Auditorium'
  },
  { 
    band: 'New Year\'s Eve Run',
    date: 'Dec 28, 2018',
    venue: 'The Fillmore Auditorium'
  },
  { 
    band: 'Gogol Bordello',
    date: 'Dec 28, 2018',
    venue: 'The Ogden Theatre'
  },
  { 
    band: 'Gogol Bordello',
    date: 'Dec 28, 2018',
    venue: 'The Ogden Theatre'
  },
  { 
    band: 'Dirty Rotten Rhymers',
    date: 'Dec 23, 2018',
    venue: 'Larimer Lounge'
  },
  { 
    band: 'Detox Unit ',
    date: 'Dec 21, 2018',
    venue: 'Cervantes\' Masterpiece Ballroom'
  },
  { 
    band: 'Biz Markie',
    date: 'Dec 21, 2018',
    venue: 'Summit Music Hall'
  },
  { 
    band: 'Brian Setzer Orchestra',
    date: 'Dec 17, 2018',
    venue: 'The Paramount Theatre'
  },
  { 
    band: 'Myles Kennedy',
    date: 'Dec 11, 2018',
    venue: 'Summit Music Hall'
  },
  { 
    band: 'Dominic Lalli\'s Bluebird Quintet',
    date: 'Dec 11, 2018',
    venue: 'Ophelia\'s Electric Soapbox'
  },
  { 
    band: 'Thom Yorke',
    date: 'Dec 11, 2018',
    venue: 'The Paramount Theatre'
  },
  { 
    band: 'The Polish Ambassador',
    date: 'Dec 08, 2018',
    venue: 'The Fillmore Auditorium'
  },
  { 
    band: 'The Polish Ambassador',
    date: 'Dec 08, 2018',
    venue: 'The Fillmore Auditorium'
  },
  { 
    band: 'Tera Melos',
    date: 'Dec 04, 2018',
    venue: 'The Ogden Theatre'
  },
  { 
    band: 'Childish Gambino',
    date: 'Dec 04, 2018',
    venue: 'The Pepsi Center'
  },
  { 
    band: 'Minus The Bear',
    date: 'Dec 04, 2018',
    venue: 'The Ogden Theatre'
  },
  { 
    band: 'Childish Gambino',
    date: 'Dec 04, 2018',
    venue: 'The Pepsi Center'
  },
  { 
    band: 'OneRepublic',
    date: 'Dec 04, 2018',
    venue: 'The Fillmore Auditorium'
  },
  { 
    band: 'Fleetwood Mac',
    date: 'Dec 03, 2018',
    venue: 'The Pepsi Center'
  },
  { 
    band: 'Fleetwood Mac',
    date: 'Dec 03, 2018',
    venue: 'The Pepsi Center' 
  },
  { 
    band: 'The Front Bottoms',
    date: 'Dec 01, 2018',
    venue: 'The Fillmore Auditorium' 
  },
  { 
    band: 'Lunice',
    date: 'Nov 30, 2018',
    venue: 'The Ogden Theatre' 
  },
  { 
    band: 'Funkstatik',
    date: 'Nov 29, 2018',
    venue: 'The Black Box' 
  },
  { 
    band: 'Troy Boi',
    date: 'Nov 29, 2018',
    venue: 'The Ogden Theatre' 
  },
  { 
    band: 'Leprous',
    date: 'Nov 24, 2018',
    venue: 'Bluebird Theater' 
  },
  { 
    band: 'Ministry',
    date: 'Nov 24, 2018',
    venue: 'The Fillmore Auditorium' 
  },
  { 
    band: 'Twenty One Pilots',
    date: 'Nov 19, 2018',
    venue: 'The Pepsi Center' 
  },
  { 
    band: 'Max Frost',
    date: 'Nov 19, 2018',
    venue: 'The Pepsi Center' 
  },
  { 
    band: 'Marvel Years',
    date: 'Nov 17, 2018',
    venue: 'Cervantes\' Masterpiece Ballroom' 
  },
  { 
    band: 'TruFeelz / Notorious Conduct',
    date: 'Nov 15, 2018',
    venue: 'The Black Box' },
  { 
    band: 'Wrecks and Badflower',
    date: 'Nov 14, 2018',
    venue: 'The Marquis Theater' 
  },
  { 
    band: 'Good Charlotte / Knuckle Puck / Sleeping With Sirens  ',
    date: 'Nov 14, 2018',
    venue: 'The Ogden Theatre' 
  },
  { 
    band: 'Good Charlotte',
    date: 'Nov 14, 2018',
    venue: 'The Ogden Theatre'
  },
  { 
    band: 'Robert DeLong',
    date: 'Nov 13, 2018 ',
    venue: 'The Fillmore Auditorium' 
  },
  { 
    band: 'AJR',
    date: 'Nov 13, 2018',
    venue: 'The Fillmore Auditorium'
  },
  { 
    band: 'Emarosa',
    date: 'Nov 13, 2018',
    venue: 'The Marquis Theater'
  },
  { 
    band: 'Sylar',
    date: 'Nov 10, 2018',
    venue: 'The Oriental Theater'
  },
  { 
    band: 'Mike Shinoda',
    date: 'Nov 09, 2018',
    venue: 'The Fillmore Auditorium'
  },
  { 
    band: 'Thrice',
    date: 'Nov 07, 2018',
    venue: 'Summit Music Hall'
  },
  { 
    band: 'The Bronx',
    date: 'Nov 07, 2018',
    venue: 'Summit Music Hall'
  },
  { 
    band: 'Teenage Wrist',
    date: 'Nov 07, 2018',
    venue: 'Summit Music Hall' },
  { 
    band: 'The Wind & The Wave',
    date: 'Nov 06, 2018',
    venue: 'Bluebird Theater'
  },
  { 
    band: 'Circa Survive',
    date: 'Nov 06, 2018',
    venue: 'The Oriental Theater'
  },
  { 
    band: 'The Story So Far',
    date: 'Nov 06, 2018',
    venue: 'The Ogden Theatre'
  },
  { 
    band: 'The Alarm',
    date: 'Nov 04, 2018',
    venue: 'The Oriental Theater'
  },
  { 
    band: 'The Contortionist',
    date: 'Nov 04, 2018',
    venue: 'Summit Music Hall'
  },
  { 
    band: 'Lily Allen',
    date: 'Nov 03, 2018',
    venue: 'Summit Music Hall'
  },
  { 
    band: 'Amigo the Devil',
    date: 'Oct 31, 2018',
    venue: 'The Marquis Theater'
  },
  { 
    band: 'Danzig',
    date: 'Oct 31, 2018',
    venue: 'The Fillmore Auditorium'
  },
  { 
    band: 'The Word Alive',
    date: 'Oct 29, 2018',
    venue: 'Bluebird Theater'
  },
  { 
    band: 'Bob Weir',
    date: 'Oct 29, 2018',
    venue: 'The Paramount Theatre'
  },
  { 
    band: 'Fall Freaquence',
    date: 'Oct 27, 2018',
    venue: 'The Fillmore Auditorium'
  },
  { 
    band: 'For King and Country',
    date: 'Oct 20, 2018',
    venue: 'The Paramount Theatre'
  },
  { 
    band: 'Phutureprimitive',
    date: 'Oct 20, 2018',
    venue: 'The Ogden Theatre'
  },
  { 
    band: 'Tres Pendejos',
    date: 'Oct 20, 2018',
    venue: 'Lost Lake Lounge' },
  { 
    band: 'That 1 Guy',
    date: 'Oct 19, 2018',
    venue: 'Cervantes\' Masterpiece Ballroom'
  },
  { 
    band: 'Mike Posner',
    date: 'Oct 19, 2018',
    venue: 'Red Rocks Amphitheatre'
  },
  { 
    band: 'Excision',
    date: 'Oct 19, 2018',
    venue: 'The Ogden Theatre'
  },
  { 
    band: 'Jain',
    date: 'Oct 18, 2018',
    venue: 'Bluebird Theater' },
  { 
    band: 'She Wants Revenge',
    date: 'Oct 17, 2018',
    venue: 'The Oriental Theater' },
  { 
    band: 'Banners',
    date: 'Oct 16, 2018',
    venue: 'Bluebird Theater' },
  { 
    band: 'DREAMERS',
    date: 'Oct 15, 2018',
    venue: 'The Marquis Theater' 
  },
  { 
    band: 'Bleep Bloop',
    date: 'Oct 13, 2018',
    venue: 'Globe Hall' 
  },
  { 
    band: 'Alkaline Trio  ',
    date: 'Oct 12, 2018',
    venue: 'The Fillmore Auditorium'
  },
  { 
    band: 'Bullet for My Valentine',
    date: 'Oct 10, 2018',
    venue: 'The Ogden Theatre' 
  },
  { 
    band: 'Vinyl Theatre',
    date: 'Oct 10, 2018',
    venue: 'The Marquis Theater' 
  },
  { 
    band: 'The Catching',
    date: 'Oct 10, 2018',
    venue: 'The Marquis Theater' 
  },
  { 
    band: 'Hatebreed',
    date: 'Oct 10, 2018',
    venue: 'Summit Music Hall' 
  },
  { 
    band: 'Foo Fighters  ',
    date: 'Oct 10, 2018',
    venue: 'The Pepsi Center' 
  },
  { 
    band: 'Gang of Youths',
    date: 'Oct 10, 2018',
    venue: 'The Pepsi Center' 
  },
  { 
    band: 'Whethan',
    date: 'Oct 09, 2018',
    venue: 'The Ogden Theatre' 
  },
  { 
    band: 'Against Me!  ',
    date: 'Oct 09, 2018',
    venue: 'Summit Music Hall' },
  { 
    band: 'A Giant Dog',
    date: 'Oct 09, 2018',
    venue: 'Summit Music Hall' 
  },
  { 
    band: 'Ted Leo and The Pharmacists',
    date: 'Oct 09, 2018',
    venue: 'Summit Music Hall' 
  },
  { 
    band: 'Basement',
    date: 'Oct 07, 2018',
    venue: 'Summit Music Hall'
  },
  { 
    band: 'Primus',
    date: 'Oct 07, 2018',
    venue: 'The Ogden Theatre' 
  },
  { 
    band: 'The Glitch Mob',
    date: 'Oct 06, 2018',
    venue: 'The Ogden Theatre' 
  },
  { 
    band: 'All Time Low',
    date: 'Oct 06, 2018',
    venue: 'The Fillmore Auditorium'
  },
  { 
    band: 'Dashboard Confessional',
    date: 'Oct 06, 2018',
    venue: 'The Fillmore Auditorium' 
  },
  { 
    band: 'Gnash',
    date: 'Oct 06, 2018',
    venue: 'The Fillmore Auditorium' 
  },
  { 
    band: 'The Wombats',
    date: 'Oct 03, 2018',
    venue: 'The Ogden Theatre' 
  },
  { 
    band: 'Zeal and Ardor',
    date: 'Oct 02, 2018',
    venue: 'Bluebird Theater' 
  },
  { 
    band: 'Have Mercy',
    date: 'Oct 02, 2018',
    venue: 'The Marquis Theater' 
  },
  { 
    band: 'Greta Van Fleet',
    date: 'Sep 29, 2018',
    venue: 'The Fillmore Auditorium' 
  },
  { 
    band: 'Ghostland Observatory',
    date: 'Sep 28, 2018',
    venue: 'The Ogden Theatre' 
  },
  { 
    band: 'Ringo Starr',
    date: 'Sep 25, 2018',
    venue: 'The Paramount Theatre' 
  },
  { 
    band: 'The Charlatans',
    date: 'Sep 24, 2018',
    venue: 'Bluebird Theater'
  },
  { 
    band: 'Iron & Wine  ',
    date: 'Sep 22, 2018',
    venue: 'The Paramount Theatre' 
  },
  { 
    band: 'Authority Zero',
    date: 'Sep 22, 2018',
    venue: 'Levitt Pavilion'
  },
  { 
    band: 'No Bueno!',
    date: 'Sep 22, 2018',
    venue: 'Levitt Pavilion'
  },
  { 
    band: 'Bad Religion',
    date: 'Sep 22, 2018',
    venue: 'Fiddler\'s Green Amphitheatre' 
  },
  { 
    band: 'Propagandhi',
    date: 'Sep 20, 2018',
    venue: 'The Oriental Theater'
  },
  { 
    band: 'The Early November',
    date: 'Sep 18, 2018',
    venue: 'The Marquis Theater'
  },
  { 
    band: 'Wolfmother',
    date: 'Sep 18, 2018',
    venue: 'Gothic Theatre'
  },
  { 
    band: 'Nothing But Thieves',
    date: 'Sep 17, 2018',
    venue: 'Gothic Theatre'
  },
  { 
    band: 'Stevie Wonder',
    date: 'Sep 16, 2018',
    venue: 'Overland Park'
  },
  { 
    band: 'Kendrick Lamar',
    date: 'Sep 14, 2018',
    venue: 'Overland Park'
  },
  { 
    band: 'Phoenix',
    date: 'Sep 14, 2018',
    venue: 'Overland Park' },
  { 
    band: 'Alice In Chains',
    date: 'Sep 13, 2018',
    venue: 'The Fillmore Auditorium' },
  { 
    band: 'Such Gold',
    date: 'Sep 11, 2018',
    venue: '7th Circle'
  },
  { 
    band: 'Jumble',
    date: 'Sep 11, 2018',
    venue: 'The Black Box'
  },
  { 
    band: 'Big D and the Kids Table',
    date: 'Sep 09, 2018',
    venue: 'The Oriental Theater'
  },
  { 
    band: 'Wovenhand',
    date: 'Sep 08, 2018',
    venue: 'Bluebird Theater'
  },
  { 
    band: 'Bruno Mars',
    date: 'Sep 07, 2018',
    venue: 'The Pepsi Center' 
  },
  { 
    band: 'Dead Kennedys',
    date: 'Sep 07, 2018',
    venue: 'The Ogden Theatre'
  },
  { 
    band:
     'Cardi B',
    date: 'Sep 07, 2018',
    venue: 'The Pepsi Center'
  },
  { 
    band: 'Boyz II Men',
    date: 'Sep 07, 2018',
    venue: 'The Pepsi Center'
  },
  { 
    band: 'STS9',
    date: 'Sep 06, 2018',
    venue: 'The Paramount Theatre'
  },
  { 
    band: 'Mirrors and Lights',
    date: 'Sep 06, 2018',
    venue: 'BarFly'
  },
  { 
    band: 'Rolling Blackouts Coastal Fever',
    date: 'Sep 05, 2018',
    venue: 'Larimer Lounge'
  },
  { 
    band: 'Smashing Pumpkins',
    date: 'Sep 05, 2018',
    venue: 'The Pepsi Center'
  },
  { 
    band: 'Jo Passed',
    date: 'Sep 05, 2018',
    venue: 'Larimer Lounge'
  },
  { 
    band: 'Metric',
    date: 'Sep 05, 2018',
    venue: 'The Pepsi Center'
  },
  { 
    band: 'Shiny',
    date: 'Sep 05, 2018',
    venue: 'The Pepsi Center'
  },
  { 
    band: 'Everclear',
    date: 'Sep 03, 2018',
    venue: 'Civic Center Park'
  },
  { 
    band: 'Smash Mouth',
    date: 'Sep 03, 2018',
    venue: 'Civic Center Park'
  },
  { 
    band:
     'Cyanotic',
    date: 'Sep 01, 2018',
    venue: '3 Kings Tavern'
  },
  { 
    band: 'Skydyed / Spectacle',
    date: 'Aug 29, 2018',
    venue: 'Cervantes\' Masterpiece Ballroom' 
  },
  { 
    band: 'Notorious Conduct',
    date: 'Aug 24, 2018',
    venue: 'Cervantes\' Masterpiece Ballroom' 
  },
  { 
    band: 'So What Bros',
    date: 'Aug 24, 2018',
    venue: 'Union Station' 
  },
  { 
    band: 'Rod Stewart',
    date: 'Aug 22, 2018',
    venue: 'The Pepsi Center'
  },
  { 
    band: 'Marilyn Manson',
    date: 'Aug 20, 2018',
    venue: 'The Pepsi Center'
  },
  { 
    band: 'Rob Zombie',
    date: 'Aug 20, 2018',
    venue: 'The Pepsi Center'
  },
  { 
    band: 'Rusko',
    date: 'Aug 20, 2018',
    venue: 'Beta Nightclub'
  }
]