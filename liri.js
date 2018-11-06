// Require these
require("dotenv").config();
var Spotify = require("node-spotify-api");
var request = require("request");
var moment = require("moment");
var fs = require("fs");
var keys = require("./keys.js");

// Access to keys
var spotify = new Spotify(keys.spotify);
var ombdID = keys.ombd;
var bitID = keys.bit;

// Get user command
var command = process.argv[2];
var userSearch = process.argv[3];

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