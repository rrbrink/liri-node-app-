console.log("hello, this is my twitter bot");
//require npm twit
var twit = require("twit");
//config has my personal info
var config = require("./config.js");
//call api required information for twitter API
var T = new twit(config);
//params for the api call my username and start date to pull from
var params = {
    q: 'rrbrink since:2013-01-01',
    //max 100 tweets(pssh you dont have 100 tweets😂)
    count: 100
};
//This is my API call to twitter im calling tweets, putting it into gotData
T.get('search/tweets', params, gotData);
//running function for data
function gotData(err, data, response) {
    var tweets = data.statuses;
    //info comeback in weird json so we convert it to text
    for (i = 0; i < tweets.length; i++) {
        console.log(tweets[i].text);

    }
    // console.log(data)
};
//screw it lets make irri tweet shit aswell
//
var tweet = {
    status: "#Air five bot"
}
T.post('statuses/update', tweet, tweeted);

function tweeted(err, data, response) {
console.log(data)
};

//  function(err, data, response) {
//     console.log(data)
// }