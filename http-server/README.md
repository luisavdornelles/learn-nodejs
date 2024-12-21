# Basic HTTP Server with Node.js

This project sets up a basic HTTP server using Node.js. The server can handle GET and POST requests for a list of friends and also serves a simple HTML message.

## Disclaimer

This project is for educational purposes only and does not follow best practices for building a Node.js server. It is intended as an exercise to understand the basics of handling HTTP requests and responses in Node.js. 

## Features

- **GET /friends**: Returns a list of all friends.
- **GET /friends/:id**: Returns the friend with the specified ID.
- **POST /friends**: Adds a new friend to the list.
- **GET /messages**: Returns a simple HTML message.

## Usage

1. Clone the repository.
2. Navigate to the project directory.
3. Run `node index.js` to start the server.
4. The server will be listening on `http://localhost:3000`.

## Example Requests

- **GET /friends**
``` sh
curl http://localhost:3000/friends
```

- **GET /friends/1**
```
curl http://localhost:3000/friends/1
```

- **POST /friends**
``` sh
curl -X POST -d '{"id": 3, "name": "Marie Curie"}' http://localhost:3000/friends
```

- **GET /messages**
``` sh
curl http://localhost:3000/messages
```
