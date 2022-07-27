### APP
APP_PORT:3000

### DATABASE AND TYPEORM (MYSQL)
DATABASE_TYPE = MYSQL_BY_DEFAULT
DATABASE_HOST = YOUR_HOST
DATABASE_PORT = DATABASE_PORT
DATABASE_USER= YOUR_USER
DATABASE_PASSWORD = YOUR_PASSWORD
DATABASE_NAME = YOUR_DATABASE_NAME

### JWT
JWT_SECRET_KEY = YOUR_SECRET_KEY
JWT_EXPIRES_IN = EXPIRATION

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

