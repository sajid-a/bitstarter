var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
 buffer = "Hello World 2!!"; 
 response.send(buffer);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
