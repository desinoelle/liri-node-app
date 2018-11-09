// Require these
require("dotenv").config();
var Spotify = require("node-spotify-api");
var request = require("request");
var moment = require("moment");
var fs = require("fs");
var keys = require("./keys.js");

// Access to Spotify keys
var spotify = new Spotify(keys.spotify);

// Get user command and search. Formatted the search query using a loop.
var command = process.argv[2];
var userSearch = "";
for (var i = 3; i < process.argv.length; i++) {
    if (i !== 3) {
        userSearch += "+";
    }
    userSearch += process.argv[i];
}

// Liri commands:
// BANDS IN TOWN
if (command === "concert-this") {
    console.log("Finding concert...");

    // If no search, make userSearch = "The 1975"
    if (userSearch === "") {
        userSearch = "the+1975";
    }

    // Get Bands In Town data using request
    request("https://rest.bandsintown.com/artists/" + userSearch + "/events?app_id=codingbootcamp", function(error, response, body) {

        if (!error && response.statusCode === 200) {

            // Get name of venue, venue location, and date of event
            var venue = JSON.parse(body)[0].venue.name;
            var location = JSON.parse(body)[0].venue.city + ", " + JSON.parse(body)[0].venue.country;
            var date = JSON.parse(body)[0].datetime;

            // Format date using moment
            var formatDate = moment(date, "YYYY-MM-DDTHH:ss:mm").format("MM/DD/YYYY");

            // Log out concert info
            console.log("Venue Name: " + venue);
            console.log("Location: " + location);
            console.log("Date: " + formatDate);
        }
    });
}

// SPOTIFY
if (command === "spotify-this-song") {
    console.log("Finding song...");

    // If no search, make userSearch = "The Sign" by Ace of Base
    if (userSearch === "") {
        userSearch = "the+sign+ace+of+base";
    }

    // Get Spotify data using search
    spotify.search({ type: "track", query: userSearch }, function(error, data) {

        // Error occured
        if (error) {
            console.log("Error occured: " + error);
        }
        else {

            // Get artist, song name, preview link, and album
            var artist = data.tracks.items[0].artists[0].name;
            var song = data.tracks.items[0].name;
            var album = data.tracks.items[0].album.name;
            var link = data.tracks.items[0].external_urls.spotify;

            // Log out song info
            console.log("Artist: " + artist);
            console.log("Song Title: " + song);
            console.log("Album: " + album);
            console.log("Preview song here: " + link);
        }
    });
}

// OMDB
if (command === "movie-this") {
    console.log("Finding movie...");

    // If no search, make userSearch = "Mr. Nobody"
    if (userSearch === "") {
        userSearch = "mr+nobody";
    }

    // Get OMDB data using request
    request("http://www.omdbapi.com/?t=" + userSearch + "&y=&plot=short&apikey=trilogy", function(error, response, body) {

        if (!error && response.statusCode === 200) {
      
          // Get movie title, year, IMDB rating, Rotten Tomatoes rating, country produced,
          // language, plot, and actors
          var title = JSON.parse(body).Title;
          var year = JSON.parse(body).Year;
          var imdbRating = JSON.parse(body).Ratings[0].Value;
          var rtRating = JSON.parse(body).Ratings[1].Value;
          var country = JSON.parse(body).Country;
          var lang = JSON.parse(body).Language;
          var plot = JSON.parse(body).Plot;
          var actors = JSON.parse(body).Actors;

          // Log out movie info
          console.log("Title: " + title);
          console.log("Year: " + year);
          console.log("IMDB Rating: " + imdbRating);
          console.log("Rotten Tomatoes Rating: " + rtRating);
          console.log("Country: " + country);
          console.log("Language: " + lang);
          console.log("Plot: " + plot);
          console.log("Actors: " + actors);
        }
    });
}

// READ RANDOM.txt
if (command === "do-what-it-says") {
    console.log("Reading file...");

    
}