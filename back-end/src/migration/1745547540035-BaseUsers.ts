import { MigrationInterface, QueryRunner, Table } from "typeorm";
import testUserData from "./data/testUserData";

export class BaseUsers1745547540035 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // await queryRunner.connection.synchronize(true);
        // await queryRunner.manager.getRepository("User").save(testUserData);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
