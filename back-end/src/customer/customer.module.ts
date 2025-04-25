import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Customer } from '../model/customer.entity';
import { CustomerController } from './customer.controller';
import { CustomerService } from './customer.service';

@Module({
    imports: [TypeOrmModule.forFeature([Customer])],
    providers: [CustomerService],
    controllers: [CustomerController],
    exports: []
  })
export class CustomerModule {}
