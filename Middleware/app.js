var express = require("express");
var logger = require("morgan");
var http = require("http");

var app = express();

app.use(logger("short"));

// app.use(function(req, res, next) {
//     console.log('In comes a: ' + req.method + ' to ' + req.url);
//     next();
// });

// app.use(function(req, res, next){
//     var minute = (new Date()).getMinutes();
//     if((minute % 2) === 0) {
//         next();
//     }
//     else {
//         res.statusCode = 403;
//         res.end("Not authorized");
//     }
// })

// app.use(function(request, response) {
//   response.end('Secret info: the password is "swordfish"!');
// });

app.use(function(request, response) {
  response.writeHead(200, { "Content-Type": "text/plain" });
  response.end("Hello, world!");
});

http.createServer(app).listen(8888);