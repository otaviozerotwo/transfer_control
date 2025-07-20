import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1753020701284 implements MigrationInterface {
    name = 'Default1753020701284'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tb_enterprise" ADD "status" character varying(50) NOT NULL DEFAULT 'active'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tb_enterprise" DROP COLUMN "status"`);
    }

}
