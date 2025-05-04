# NASA Project

This project is a Node.js API that simulates a NASA mission control system.

- [Course](https://academy.zerotomastery.io/courses/learn-node-js/lectures/31806849)
- [Macro level arquitecture diagram](https://lucid.app/lucidchart/2e25c1c0-aba2-4295-89e9-9c49f98daadc/edit?invitationId=inv_16a1d610-d5f1-4511-abca-56d49145d098&page=0_0#)


## Folder Structure

```sh
nasa-project/
├── client/             # Frontend code
├── server/             # Backend code
└── README.md           # Project documentation
```

## Scripts

- **Install Dependencies**:  
  `npm run install` - Installs dependencies for both the server and client.

- **Run Server**:  
  `npm run server` - Starts the server in watch mode (using FE static files from the "public" folder)

- **Run Client**:  
  `npm run client` - Starts the client application.

- **Run Both (Server & Client)**:  
  `npm run watch` - Runs both the server and client concurrently.

- **Deploy**:  
  `npm run deploy` - Builds and deploys the project to the production environment.
