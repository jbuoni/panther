import { Body, Controller, Get, HttpCode, HttpStatus, Post, Query } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { Customer } from 'src/model/customer.entity';

@Controller('customer')
export class CustomerController {
    constructor(private serv: CustomerService) { }

    @Get()
    public async getAll(@Query('name') name: string) {
        let customers: Customer[] = []
        if (name) {
            customers = await this.serv.findByName(name)
        } else {
            customers = await this.serv.getAll()
        }
        
        return {
            customers: customers,
            total: customers.length
        }
    }

    @HttpCode(HttpStatus.OK)
    @Post()
    public async createCustomer(@Body() customerDto: Record<string, any>) {
        return await this.serv.create(customerDto)
    }

    @HttpCode(HttpStatus.OK)
    @Post('matter')
    public async addMatter(@Body() customerDto: Record<string, any>) {
        return await this.serv.addMatter(customerDto)
    }
    
}
