import { MigrationInterface, QueryRunner } from "typeorm";

export class ajusteContacts1675219197741 implements MigrationInterface {
    name = 'ajusteContacts1675219197741'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "password"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" ADD "password" character varying(120) NOT NULL`);
    }

}
