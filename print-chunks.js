var https = require("https");

function getAndPrintHTMLChunks () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  https.get(requestOptions, (response) => {

    response.on('data', (data) => {
      console.log(data + "\n");
    });
  });



}

getAndPrintHTMLChunks();