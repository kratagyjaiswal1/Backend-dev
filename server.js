const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => { b
    const method = req.method;
    const url = req.url;

    // Log request to a file
    fs.appendFile(
        "log.txt",
        `${new Date().toISOString()} | ${method} | ${url}\n`,
        (err) => {
            if (err) console.log("Error writing log");
        }
    );

    switch (url) {
        case "/":
            res.writeHead(200, { "Content-Type": "text/plain" });
            res.end("welcome to home page");
            break;

        case "/about-us":
            res.writeHead(200, { "Content-Type": "text/plain" });
            res.end("welcome to about us");
            break;

        default:
            res.writeHead(404, { "Content-Type": "text/plain" });
            res.end("page not found");
    }
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
