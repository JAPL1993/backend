import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: '162.214.164.60',
        port: 3306,
        username: 'faguiar_documentation',
        password: 'mVuvMBZMX#Qn',
        database: 'faguiar_documentation',
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: true,
      });
      return dataSource.initialize();
    },
  },
];
