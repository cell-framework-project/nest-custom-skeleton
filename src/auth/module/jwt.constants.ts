import * as dotenv from 'dotenv';

const config = dotenv.config( { path: __dirname + '/../../.env' } );

export const jwtConstants = { secret: 'mysecretkey' };