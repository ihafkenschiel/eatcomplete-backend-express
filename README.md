# eatComplete
Nutritional meal recommender app
By Ian Hafkenschiel

## Setup

1. Create a MySQL database called `eatcomplete` based off of the schema in `server/config/db-schema.sql` and load data
2. Clone the `.env.template` file as `.env` in the project root and add your MySQL credentials

To generate a new Sequelize model from an existing MySQL database:
```
node_modules/.bin/sequelize-auto -h 127.0.0.1 -d DB_NAME -u DB_USER -x DB_PASSWORD -p 3306 --dialect mysql -c /FULL_PATH/eatcomplete-react-express/Server/config/sequelize-auto-settings.json -o /FULL_PATH/eatcomplete-react-express/Server/models
```
Change for your environment: DB_NAME, DB_USER, DB_PASSWORD, FULL_PATH's

## Install dependencies

```sh
yarn ./server && yarn ./front-end
```

## Running locally

Run server:
```sh
cd server && yarn start:local
```

Run front end:
```
cd front-end && yarn dev
```

This will start up a node.js express server on port `9999` and run create-react-app on port `3000`

Nodemon will auto hot-reload on any changes in the server directory, while create-react-app will auto hot-reload any changes in front-end directory

`http://localhost:3000` will display a basic landing page with routing using `react-router` v6 and form example communicating with the express server

## Building Server

```sh
yarn build:server
```

This will compile the server TypeScript code into a `dist` directory in the root directory

## Building front-end

```sh
yarn build:front-end
```

## Architecture

1. Package Manager - Yarn
2. Language - TypeScript *WIP
3. Backend server - Node.js
4. Backend API framework - Express.js
5. Database - MySQL
6. ORM - Sequelize
7. Query Language/Server - Apollo + GraphQL
8. Frontend framework - React 18 Alpha
9. Data Architecture - Relay*
10. UI Component Library - Material UI
11. Theme - Devias Material Kit
12. UI Component Explorer - Storybook*

* Not yet implemented