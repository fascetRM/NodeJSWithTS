"use strict";
var fs = require("fs");
var Router = (function () {
    function Router() {
    }
    Router.prototype.handleRequest = function (request, response) {
        response.writeHead(200, { "Content-Type": "text/html" });
        fs.readFile("./Index.html", null, function (error, data) {
            if (error) {
                response.writeHead(404);
                response.write("File not found!");
            }
            else {
                response.write(data);
            }
            response.end();
        });
    };
    return Router;
}());
module.exports = new Router();
//# sourceMappingURL=Router.js.map