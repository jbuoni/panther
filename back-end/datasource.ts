import { DataSource } from "typeorm";

require('dotenv').config();

const getValue = (key: string): string => {
  const value = process.env[key];
  if (!value)
    throw new Error(`config error - missing env.${key}`);

  return value;
}


export default new DataSource({
    type: 'postgres',
    host: getValue('POSTGRES_HOST'),
    port: parseInt(getValue('POSTGRES_PORT')),
    username: getValue('POSTGRES_USER'),
    password: getValue('POSTGRES_PASSWORD'),
    database: getValue('POSTGRES_DATABASE'),
    entities: ['**/*.entity{.ts,.js}'],
    migrationsTableName: 'migration',
    migrations: ['src/migration/*.ts'],
    synchronize: true
  })