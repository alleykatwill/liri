// Requiring our spotify, OMDB, and bands in town modules exported from keys.js
var keys = require("./keys");
//Require data from File System npm package
var fs = require("fs");
//Require data from Axios npm package
var axios = require("axios");
//Require data from moment npm package
var moment = require("moment");

function myConcert(userInput) {
  var artist = userInput;
  var url =
    "https://rest.bandsintown.com/artists/" +
    artist +
    "/events?app_id=" +
    keys.bandsInTown.id;

  axios.get(url).then(function(response) {
    // console.log(response.data)
    for (var i = 0; i < response.data.length; i++) {
      console.log(
        "Concert Time: " +
          moment(response.data[i].datetime, "YYYY-MM-DDTHH:mm:ss").format(
            "MM/DD/YYYY, h:mm A"
          )
      );
      console.log(
        "Concert Location: " +
          response.data[i].venue.city +
          ", " +
          response.data[i].venue.region +
          ", " +
          response.data[i].venue.country
      );
      console.log("Concert Venue: " + response.data[i].venue.name);
      console.log("--------------------------------------------------");
      fs.appendFileSync(
        "log.txt",
        "\r\n" + "Concert Search Log----------------------" + "\r\n",
        "utf8"
      );
      fs.appendFileSync(
        "log.txt",
        "\r\n" + "Venue Name: " + response.data[i].venue.name + "\r\n",
        "utf8"
      );
      fs.appendFileSync(
        "log.txt",
        "\r\n" +
          "Venue Location: " +
          response.data[i].venue.city +
          ", " +
          response.data[i].venue.region +
          ", " +
          response.data[i].venue.country +
          "\r\n",
        "utf8"
      );
      fs.appendFileSync(
        "log.txt",
        "\r\n" +
          "Venue Time: " +
          moment(response.data[i].datetime, "YYYY-MM-DDTHH:mm:ss").format(
            "MM/DD/YYYY, h:mm A"
          ) +
          "\r\n",
        "utf8"
      );
      fs.appendFileSync(
        "log.txt",
        "\r\n" + "-----------------------------------------" + "\r\n",
        "utf8"
      );
    }
  });
}

// Exporting the function which we will use in main.js
module.exports = myConcert;
