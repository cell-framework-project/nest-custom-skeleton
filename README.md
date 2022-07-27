### BUIILT IN JWT SINGLE AUTH
### TYPE ORM CUSTOM REPOSITORY(DOMAIN STORAGE)
### CQRS AND EVENT SOURCING

### ENVIROMENT

Create a .env file in the root file, and add parameters:
<br>

### APP
APP_PORT = <APP_PORT>

### DATABASE AND TYPEORM (MYSQL)
DATABASE_TYPE = <MYSQL_BY_DEFAULT>
<br>
DATABASE_HOST = <YOUR_HOST>
<br>
DATABASE_PORT = <DATABASE_PORT>
<br>
DATABASE_USER= <YOUR_USER>
<br>
DATABASE_PASSWORD = <YOUR_PASSWORD>
<br>
DATABASE_NAME = <YOUR_DATABASE_NAME>

### JWT
JWT_SECRET_KEY = <YOUR_SECRET_KEY>
<br>
JWT_EXPIRES_IN = <EXPIRATION_TIME>

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

