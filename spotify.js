var Spotify = require('node-spotify-api');
var spotify = new Spotify({
    id: '7e260b80585d4520a8ac303aa1b2c09a',
    secret: '563be3e8171c4ef09993aba3bd2dc98d'
  });
  spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
   
  console.log(data); 
});

