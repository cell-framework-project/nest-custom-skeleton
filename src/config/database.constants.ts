import * as dotenv from 'dotenv';

const config = dotenv.config({path:__dirname+'/../../.env'});

export const databaseConstants = {
  host: process.env.DATABASE_HOST,
  port: parseInt(process.env.DATABASE_PORT),
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME
};