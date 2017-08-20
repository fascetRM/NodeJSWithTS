import http = require('http');
import router = require("./Router");

var port = process.env.port || 1337;
http.createServer(router.handleRequest).listen(port);
console.log("Server is listening at port " + port);