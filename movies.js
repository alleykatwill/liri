// Requiring our spotify, OMDB, and bands in town modules exported from keys.js
var keys = require("./keys");
//Require data from File System npm package
var fs = require("fs");
//Require data from Axios npm package
var axios = require("axios");

function myMovies(userInput) {
  var movie = userInput;
  if (!movie) {
    console.log("If you haven't watched 'Mr. Nobody,' then you should.");
    console.log("It's on Netflix!");
    movie = "Mr. Nobody";
  }
  var url =
    "http://www.omdbapi.com/?t=" +
    movie +
    "&y=&plot=short&apikey=" +
    keys.omdb.id;
  axios.get(url).then(function(response) {
    // console.log(response.data)
    console.log("--------------------------\n");
    console.log("Movie Title: " + response.data.Title);
    console.log("Year: " + response.data.Year);
    console.log("IMDB Rating: " + response.data.imdbRating);
    console.log("Rotten Tomatoes: " + response.data.Ratings[1].Value);
    console.log("Country: " + response.data.Country);
    console.log("Language: " + response.data.Language);
    console.log("Plot: " + response.data.Plot);
    console.log("Actors: " + response.data.Actors);
    console.log("\n--------------------------\n");
    //adds text to log.txt
    fs.appendFileSync(
      "log.txt",
      "\r\n" + "Movie Search Log----------------------" + "\r\n",
      "utf8"
    );
    fs.appendFileSync(
      "log.txt",
      "\r\n" + "Year: " + response.data.Year + "\r\n",
      "utf8"
    );
    fs.appendFileSync(
      "log.txt",
      "\r\n" + "IMDB Rating: " + response.data.imdbRating + "\r\n",
      "utf8"
    );
    fs.appendFileSync(
      "log.txt",
      "\r\n" + "Rotten Tomatoes: " + response.data.Ratings[1].Value + "\r\n",
      "utf8"
    );
    fs.appendFileSync(
      "log.txt",
      "\r\n" + "Country: " + response.data.Country + "\r\n",
      "utf8"
    );
    fs.appendFileSync(
      "log.txt",
      "\r\n" + "Language: " + response.data.Language + "\r\n",
      "utf8"
    );
    fs.appendFileSync(
      "log.txt",
      "\r\n" + "Plot: " + response.data.Plot + "\r\n",
      "utf8"
    );
    fs.appendFileSync(
      "log.txt",
      "\r\n" + "Year: " + response.data.Year + "\r\n",
      "utf8"
    );
    fs.appendFileSync(
      "log.txt",
      "\r\n" + "Actors: " + response.data.Actors + "\r\n",
      "utf8"
    );
    fs.appendFileSync(
      "log.txt",
      "\r\n" + "-----------------------------------------" + "\r\n",
      "utf8"
    );
  });
}

// Exporting the function which we will use in main.js
module.exports = myMovies;
