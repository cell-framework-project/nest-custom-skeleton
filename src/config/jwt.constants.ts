import * as dotenv from 'dotenv';

const config = dotenv.config({path:__dirname+'/../../.env'});

export const jwtConstants = {
  secretKey: process.env.JWT_SECRET_KEY,  
  expiresIn: process.env.JWT_EXPIRES_IN  
};