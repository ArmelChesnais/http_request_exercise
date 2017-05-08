var https = require("https");

module.exports = function getHTML (options, callback) {

  https.get(options, (response) => {

    var output = "";

    response.on('data', (data) => {
      output += data;
    });

    response.on('end', () => {
      callback(output);
    });
  });

}