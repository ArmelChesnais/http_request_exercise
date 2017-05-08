var https = require("https");

function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  https.get(requestOptions, (response) => {

    var output = "";

    response.on('data', (data) => {
      output += data;
    });

    response.on('end', () => {
      console.log(output);
    });
  });
}

getAndPrintHTML();