import { DataSourceOptions } from 'typeorm';
import { config } from 'dotenv';
import { Experiments } from './entities/experiment.entity';
import { migrations1665498759905 } from './migrations/1665498759905-migrations';

export default (): DataSourceOptions => {
  config();

  switch (process.env.NODE_ENV) {
    case 'production':
      return {
        type: 'postgres',
        username: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
        port: Number(process.env.DATABASE_PORT),
        url: process.env.DATABASE_URL,
        ssl: { rejectUnauthorized: false },
        entities: [`${__dirname}/entities/*.entity.{ts,js}`],
        migrations: [migrations1665498759905],
      };
    case 'test':
      return {
        type: 'sqlite',
        synchronize: true,
        database: ':memory:',
        entities: [Experiments],
        migrations: [migrations1665498759905],
      };
    default:
      return {
        type: 'sqlite',
        database: 'test-assigments.sqlite',
        entities: [Experiments],
        migrations: [migrations1665498759905],
      };
  }
};
