var filter = require('./filtered');
var dir = process.argv[2];
var ext = process.argv[3];

var callback = function (err, list) {  
  for (x in list) {
    console.log(list[x]);
  }
}

filter(dir, ext, callback);
