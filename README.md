## PLUG AND PLAY FEAUTURES

<h6>USER MODEL ON TYPE ORM</h6>
<h6>BUIILT IN JWT SINGLE AUTH ON PASSPORT</h6>
<h6>TYPE ORM CUSTOM REPOSITORY IMPLEMENTATION(DOMAIN STORAGE)</h6>
<h6>VALUE OBJETS IN ENTITIES</h6>
<h6>CQRS AND EVENT SOURCING</h6>
<h6>DTO VALIDATION</h6>
<h6>DOMAIN CLAUSE GUARDS ON APPLICATION SERVICES</h6>

## ENVIROMENT GLOBALS

Create a .env file in the root file, and add parameters:

### APP
```
APP_PORT = <APP_PORT>
```

### DATABASE AND TYPEORM (MYSQL)
```
DATABASE_TYPE = <MYSQL_BY_DEFAULT>
DATABASE_HOST = <YOUR_HOST>
DATABASE_PORT = <DATABASE_PORT>
DATABASE_USER= <YOUR_USER>
DATABASE_PASSWORD = <YOUR_PASSWORD>
DATABASE_NAME = <YOUR_DATABASE_NAME>
```

### JWT
```
JWT_SECRET_KEY = <YOUR_SECRET_KEY>
JWT_EXPIRES_IN = <EXPIRATION_TIME>
```


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

