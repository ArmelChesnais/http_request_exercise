var https = require("https");
var inputUrl = process.argv[2];

function getHTML (options, callback) {

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



function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

if ( inputUrl ) {
  requestOptions = trimAndSplit(inputUrl);
}
getHTML(requestOptions, printHTML);