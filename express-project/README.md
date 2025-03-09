# Express Project

This is a simple Express.js project that demonstrates the use of routes, controllers, and views.

## Project Structure

```
express-project/
    package.json
    server.js
    controllers/
        friends.controller.js
        messages.controller.js
    models/
        friends.model.js
    public/
        css/
            style.css
        images/
            skimountain.jpg
    routes/
        friends.router.js
        messages.router.js
    views/
        index.hbs
        layout.hbs
        messages.hbs
```

## Installation

1. Clone the repository:
    ```sh
    git clone <repository-url>
    cd express-project
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

## Usage

1. Start the server:
    ```sh
    npm start
    ```

2. Open your browser and navigate to `http://localhost:3000`.

## Routes

- `/` - Home page
- `/friends` - Friends routes
- `/messages` - Messages routes

## Middleware

- Logs request method, URL, and response time.

## Views

- Handlebars (`.hbs`) templates are used for rendering views.

## Static Files

- Static files are served from the `public` directory.

## License

This project is licensed under the MIT License.
