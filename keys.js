// console.log('Spotify API is loaded. ');

exports.spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
};

// console.log('OMDB API is loaded. ');

exports.omdb = {
  id: process.env.OMDB_ID
};

// console.log('Bands In Town API is loaded. ');

exports.bandsInTown = {
  id: process.env.BANDS_IN_TOWN_ID
};
