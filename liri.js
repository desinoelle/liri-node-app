// Read dotenv
require("dotenv").config();

// Access to keys
var spotify = new Spotify(keys.spotify);

// Get user command
var command = process.argv[2];

// Liri commands:
if (command === "concert-this") {

}
if (command === "spotify-this-song") {

}
if (command === "movie-this") {

}
if (command === "do-what-it-says") {

}
else {
    console.log("Invalid command.");
}