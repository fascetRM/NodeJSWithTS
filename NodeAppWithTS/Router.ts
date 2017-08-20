import http = require('http');
import fs = require("fs");

class Router {
    handleRequest(request: http.IncomingMessage, response: http.ServerResponse) {
        response.writeHead(200, { "Content-Type": "text/html" });

        fs.readFile("./Index.html", null,
            (error, data) => {
                if (error) {
                    response.writeHead(404);
                    response.write("File not found!");
                } else {
                    response.write(data);
                }
                response.end();
            }
        );
    }
}

export = new Router() as Router;