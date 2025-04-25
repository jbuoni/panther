import { MigrationInterface, QueryRunner } from "typeorm";
import data from './data/testdata';

export class CustomerInit1745454645482 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE IF NOT EXISTS customer (
            id SERIAL PRIMARY KEY,
            name VARCHAR(300) NOT NULL,
            birthday TIMESTAMPTZ NOT NULL,
            email VARCHAR(300) NOT NULL,
            phone VARCHAR(300) NOT NULL,
            address VARCHAR(300) NOT NULL,
            matters JSONB DEFAULT '[]' NOT NULL
        )`);
        
        // await queryRunner.manager.getRepository("Customer").save(data);
        data.forEach(async (customer) => {
            const customerCopy = { ...customer, matters: JSON.stringify(customer.matters) };
            await queryRunner.manager.getRepository("Customer").save(customer);
        })
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
