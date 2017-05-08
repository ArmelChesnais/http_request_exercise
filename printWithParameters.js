var https = require("https");
var inputUrl = process.argv[2];

function getAndPrintHTML (options) {

  https.get(options, (response) => {

    var output = "";

    response.on('data', (data) => {
      output += data;
    });

    response.on('end', () => {
      console.log(output);
    });
  });

}

function trimAndSplit (urlStr) {
  var trim = urlStr.split("//")[1];
  console.log(trim);
  var pathStart = trim.search(/\//);
  if ( pathStart < 0) pathStart = trim.length;
  var result = {
    host: trim.slice(0,pathStart),
    path: trim.slice(pathStart)
  }
  if ( result.path === "" ) {
    result.path === "/";
  }
  return result;
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

if ( inputUrl ) {
  getAndPrintHTML( trimAndSplit(inputUrl) );
}
else {
  getAndPrintHTML(requestOptions);
}

// getAndPrintHTML("https://www.google.com/search");