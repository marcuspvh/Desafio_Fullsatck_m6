import { MigrationInterface, QueryRunner } from "typeorm";

export class updateUsers1675179875142 implements MigrationInterface {
    name = 'updateUsers1675179875142'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "isAdm" SET DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "isAdm" DROP DEFAULT`);
    }

}
