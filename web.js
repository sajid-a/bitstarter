var fs = require('fs');

var express = require('express');


var app = express.createServer(express.logger());

app.get('/', function(request, response) {
 buf = new Buffer(fs.readFileSync("index.html")); 
 buffe = buf.toString();
 response.send(buffe);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
