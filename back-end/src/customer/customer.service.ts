import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Customer } from '../model/customer.entity';
import { Like, Repository } from 'typeorm';

@Injectable()
export class CustomerService {
    constructor(@InjectRepository(Customer) private readonly repo: Repository<Customer>) { }


    public async getAll() {
        return await this.repo.find({
            order: {
                name: 'ASC'
            }
        })
    }

    public async findByName(name: string) {
        return await this.repo.find({
            where: {
                name: Like(`%${name}%`)
            }
        })
    }

    public async create(customerDto: Record<string, any>) {
        const customer = this.repo.create(customerDto)
        return await this.repo.save(customer)
    }

    public async addMatter(customerDto: Record<string, any>) {  
        const customer = await this.repo.findOneBy({ id: customerDto.id })
        if (!customer) {
            throw new Error('Customer not found')
        }
        customer.matters.push(customerDto)
        return await this.repo.save(customer)
    }
}
