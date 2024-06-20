## `json-server` Documentation

### Table of Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Basic Usage](#basic-usage)
- [Configuration](#configuration)
- [Examples](#examples)
  - [GET Requests](#get-requests)
  - [POST Requests](#post-requests)
  - [PUT Requests](#put-requests)
  - [DELETE Requests](#delete-requests)
- [Common Patterns](#common-patterns)
- [Tips and Best Practices](#tips-and-best-practices)

### Introduction

`json-server` is a powerful and flexible tool that allows you to create a RESTful JSON API with zero coding in a matter of minutes. It's particularly useful for prototyping and mocking up REST APIs for front-end development.

### Installation

To install `json-server`, you need Node.js and npm installed on your system. You can install it globally using npm:

```bash
npm install -g json-server
```

Or as a local development dependency:

```bash
npm install json-server --save-dev
```

### Basic Usage

To start a server, you need a JSON file (e.g., `db.json`) that acts as your database. Here's an example `db.json`:

```json
{
  "posts": [
    { "id": 1, "title": "Hello World", "author": "John Doe" },
    { "id": 2, "title": "Another Post", "author": "Jane Doe" }
  ],
  "comments": [
    { "id": 1, "body": "Great post!", "postId": 1 },
    { "id": 2, "body": "Very informative.", "postId": 1 }
  ]
}
```

To start the server, run:

```bash
json-server --watch db.json
```

This will start a server at `http://localhost:3000` and create routes for each resource defined in the `db.json`.

### Configuration

`json-server` can be customized through a configuration file (`json-server.json`) or command-line options. Here's an example configuration:

```json
{
  "port": 4000,
  "host": "localhost",
  "watch": true,
  "routes": {
    "/api/*": "/$1"
  }
}
```

Start the server with:

```bash
json-server --config json-server.json
```

### Examples

#### GET Requests

Fetch all posts:

```bash
curl http://localhost:3000/posts
```

Fetch a single post by ID:

```bash
curl http://localhost:3000/posts/1
```

Fetch comments related to a post:

```bash
curl http://localhost:3000/comments?postId=1
```

#### POST Requests

Add a new post:

```bash
curl -X POST -H "Content-Type: application/json" -d '{"title": "New Post", "author": "New Author"}' http://localhost:3000/posts
```

#### PUT Requests

Update an existing post:

```bash
curl -X PUT -H "Content-Type: application/json" -d '{"title": "Updated Post", "author": "Updated Author"}' http://localhost:3000/posts/1
```

#### DELETE Requests

Delete a post:

```bash
curl -X DELETE http://localhost:3000/posts/1
```

### Common Patterns

- **Nested Resources:** Use query parameters to filter related resources.
- **Custom Routes:** Use a `routes.json` file to map custom endpoints to specific resources.
- **Middleware:** Use JavaScript to add custom middleware for more advanced use cases.

### Tips and Best Practices

- **Database Integrity:** Ensure that related data (e.g., `postId` in comments) is consistent to avoid errors.
- **Performance:** For large datasets, consider using pagination or query parameters to limit the amount of data returned.
- **Security:** Avoid exposing `json-server` in production environments as it is intended for development and prototyping purposes.
