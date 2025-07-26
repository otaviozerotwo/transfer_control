import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1753564080851 implements MigrationInterface {
    name = 'Default1753564080851'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tb_volume" ADD "status" character varying(50) NOT NULL DEFAULT 'pending'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tb_volume" DROP COLUMN "status"`);
    }

}
