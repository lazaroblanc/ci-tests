const package = require('./package.json');
const http = require('http');
const PORT = 8080;

function handleRequest(request, response) {
    response.end(`Version: ${package.version}\n${request.url}`);
}

const server = http.createServer(handleRequest);

server.listen(PORT, function () {
    // Log (server-side) when our server has started
    console.log(`Server listening on: http://localhost:${PORT}`);
});
