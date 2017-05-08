var getHTML = require('./http-functions');

var dict = { a : '4', e : '3', l : '1', o : '0', s : '5', t : '7', 'ck' : 'x', 'er' : '0r', 'you' : 'j00' }

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/1337.html'
};

function print1337 (html) {
var output = "";
  /* Write your code here! */
  for (var i = 0; i < html.length;) {
    var charIn = html[i];
    var charOut = html[i];
    for (var key in dict) {
      var matched = true;
      for (var keyCharIndex in key) {
        var offset = i + Number(keyCharIndex);
        if ( !html.charAt(offset) || key.charAt(keyCharIndex).toLowerCase() !== html.charAt(offset).toLowerCase() ) {
          matched = false;
          break;
        }
      }
      if (matched && key.length >= charIn.length) {
        charIn = key;
        charOut = dict[key];
      }
    }
    output += charOut;
    i += charIn.length;
  }
  console.log(output);
}



getHTML(requestOptions, print1337);