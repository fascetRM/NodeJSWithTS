"use strict";
var http = require('http');
var router = require("./Router");
var port = process.env.port || 1337;
http.createServer(router.handleRequest).listen(port);
console.log("Server is listening at port " + port);
//# sourceMappingURL=server.js.map