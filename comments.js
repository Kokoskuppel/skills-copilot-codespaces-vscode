// Create a web server that listens on port 3000. It should respond to a request to /comments in one of two ways:
// If the request is a GET request, it should return a list of comments in JSON format.
// If the request is a POST request, it should add a new comment to the list of comments and return a 201 status code.
// The list of comments should be stored in a variable that is accessible to the web server.

// Example request:
// POST /comments
// Content-Type: application/json

// { "author": "John Doe", "message": "I am so cool." }

// Example response:
// Status: 201 Created

// GET /comments
// Content-Type: application/json

// [
//     { "author": "John Doe", "message": "I am so cool." }
// ]
// This is the list of comments that should be returned by the web server. It should start out empty and be populated by the POST requests.

// You can use the http module to create the web server. The fs module will help you read and write the list of comments to a file.

const http = require('http');
const fs = require('fs');

let comments = [];

const server = http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/comments') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(

            comments

        ));
        } else if (req.method === 'POST' && req.url === '/comments') {
            let body = '';
            req.on('data', chunk => {
                body += chunk.toString();
            });
            req.on('end', () => {
                const newComment = JSON.parse(body);
                comments.push(newComment);
                res.writeHead(201, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify(newComment));
            });
        } else {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('Not Found');
        }
    });
    
    server.listen(3000, () => {
        console.log('Server is listening on port 3000');
    });