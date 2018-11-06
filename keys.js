console.log('this is loaded');

exports.spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
};

exports.ombd = process.env.OMBD_ID;

exports.bit = process.env.BIT_ID;