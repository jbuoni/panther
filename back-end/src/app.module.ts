import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { CustomerModule } from './customer/customer.module';
import { AuthModule } from './auth/auth.module';

require('dotenv').config();

const getValue = (key: string): string => {
  const value = process.env[key];
  if (!value)
    throw new Error(`config error - missing env.${key}`);

  return value;
}

@Module({
  imports: [
    TypeOrmModule.forRoot({
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
    }),
    UserModule,
    CustomerModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule { }