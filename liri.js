console.log("hello, I'm Liri, what can i help you with?");
//require npm twit
var Twit = require("twit");
var Spotify = require('node-spotify-api');
//config has my personal info
var config = require("./config.js");
//I need to make a process.argv that grabs what is typed and implements it into the function
var userImput = process.argv[2];
var userTMessage = "";

for (i = 3; i < process.argv.length; i++) {
    userTMessage = userTMessage + " " + process.argv[i];
}
//ask Ryan about foreach to see if it would be better for this situation
//need to grab the right content for spotify or IMDB, using a for loop
console.log(userImput);
console.log(userTMessage, "this is our user message");
// need to make a for loop that grabs everything said and puts it into an organized string ""
//put it here
//call api required information for twitter API
// console.log(new Object, 'this is our new obj');

var t = new Twit(config);
//twitter information
var spotify = new Spotify({
    id: '7e260b80585d4520a8ac303aa1b2c09a',
    secret: '563be3e8171c4ef09993aba3bd2dc98d'
});


switch (userImput) {
    case 'tweets':
        //params for the api call my username and start date to pull from
        var params = {
            q: 'rrbrink since:2013-01-01',
            //max 100 tweets(i got my main account ban with a for loop that posted 24 things at once)
            count: 100
        };
        //This is my API call to twitter im calling tweets, putting it into gotData
        t.get('search/tweets', params, gotData);
        //running function for data
        function gotData(err, data, response) {
            var tweets = data.statuses;
            //info comeback in weird json so we convert it to text
            for (i = 0; i < tweets.length; i++) {
                console.log(tweets[i].text);
            };
            // console.log(data)
        };

        break;
    case "spotify", "Spotify":
        //spotify goes here:P
        //this is a test
        spotify.search({
            type: 'track',
            query: 'All the Small Things'
        }, function (err, data) {
            if (err) {
                return console.log('Error occurred: ' + err);
            }

            console.log(data);
            //dont know if spotify id, and secret has to be in string?
        });
        break;
    case 3:
        //omdb is here
        break;
    case 4:
        //error 200+ fail goes here to return err codes
        if (userImput = "undefined", "NAN") {
            console.log("sorry i dont know that one")
        }
        break;
    case "tPost", "tweet":
        //i want to make it so liri can post for me too here is the code it works but need to add 2 functions
        // insert var right of status
        // make var for the post maybe twitter-post var
        var tweet = {
            status: userTMessage
        };
        //ajax call
        t.post('statuses/update', tweet, tweeted);
        //function that logs data aswell as to console
        function tweeted(err, data, response) {
            console.log(data)
        };
        break;
}
