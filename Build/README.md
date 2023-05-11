## Build folder

This folder contains 3 sub-folders:

 - client
 - server
 - build

### Client
Contains the final source code for the React front-end application. Running the command `npm start` in this directory after installing dependencies using `npm install` will start the client locally.

### Server
Contains the final source code for the Node.js server, containing the Express.js API and database connections. Running the command `npm run dev` in this directory after installing dependencies using `npm install` will start the server locally.

**Note**:  the server provided is connected to a seperate MongoDB database to the live server that the hosted web application uses. To use your own database, replace `DB_ATLAS_URL` in the `.env` file to your own address.
### Build
Contains the final compiled React application, which is the code used for hosting.
