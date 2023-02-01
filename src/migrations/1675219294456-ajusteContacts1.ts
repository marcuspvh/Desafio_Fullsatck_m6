import { MigrationInterface, QueryRunner } from "typeorm";

export class ajusteContacts11675219294456 implements MigrationInterface {
    name = 'ajusteContacts11675219294456'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "isAdm"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" ADD "isAdm" boolean NOT NULL`);
    }

}
