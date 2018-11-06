// Read dotenv
require("dotenv").config();

// Access to keys
// var spotify = new Spotify(keys.spotify);

// Get user command
var command = process.argv[2];

// Liri commands:
if (command === "concert-this") {
    console.log("Finding concert...");
}
if (command === "spotify-this-song") {
    console.log("Finding song...");
}
if (command === "movie-this") {
    console.log("Finding movie...");
}
if (command === "do-what-it-says") {
    console.log("Reading file...");
}