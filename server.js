var express = require('express');
var app = express();

app.all('*', function(req, res){
  res.sendfile("index.html");
});

app.listen(3000);
