# eatComplete
Nutritional meal recommender app
By Ian Hafkenschiel

## License 
Copyright 2021
All rights reserved.
Distribution of the software in any form is only allowed with explicit, prior permission from the owner.
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
yarn
```

## Running locally

Run server:
```sh
yarn start:local
```

This will start up a node.js express server on port `9999` and run create-react-app on port `3000`

Nodemon will auto hot-reload on any changes in the server directory, while create-react-app will auto hot-reload any changes in front-end directory

Run frontend from repo [eatcomplete-frontend-react](https://github.com/ihafkenschiel/eatcomplete-frontend-react)

`http://localhost:9999/graphql` will display graphql testing ground
You can also use Postman with `http://localhost:9999/` to access the API

## Building Server

```sh
yarn build:server
```

This will compile the server TypeScript code into a `dist` directory in the root directory

## Architecture

1. Package Manager - Yarn
2. Linter - ESLint + Airbnb Style
3. Formatter - Prettier
4. Pre-commit hooks - Husky*
5. Language - TypeScript *WIP
6. Backend server - Node.js
7. Backend API framework - Express.js
8. Database - MySQL
9. ORM - Sequelize
10. Query Language/Server - Apollo + GraphQL

* Not yet implemented