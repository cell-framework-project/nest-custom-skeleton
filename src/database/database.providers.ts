import { DataSource } from 'typeorm';
import { User } from 'src/user/domain.model/user';
import { databaseConstants } from './database.constants';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async ( ) => {
      
      const dataSource = new DataSource({
        type: 'mysql',
        host: databaseConstants.host,
        port: databaseConstants.port,
        username: databaseConstants.username,
        password: databaseConstants.password,
        database: databaseConstants.database,
        entities: [User],
        debug:false,
        logging:false,
        synchronize: true        
      });

      return dataSource.initialize();
    },
  },
];
