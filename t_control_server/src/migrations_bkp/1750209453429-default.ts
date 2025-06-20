import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1750209453429 implements MigrationInterface {
    name = 'Default1750209453429'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tb_user" DROP COLUMN "refreshToken"`);
        await queryRunner.query(`ALTER TABLE "tb_user" ADD "status" integer NOT NULL DEFAULT '1'`);
        await queryRunner.query(`ALTER TABLE "tb_user" DROP CONSTRAINT "PK_1943338f8f00e074a3c5bb48d5e"`);
        await queryRunner.query(`ALTER TABLE "tb_user" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "tb_user" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "tb_user" ADD CONSTRAINT "PK_1943338f8f00e074a3c5bb48d5e" PRIMARY KEY ("id")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tb_user" DROP CONSTRAINT "PK_1943338f8f00e074a3c5bb48d5e"`);
        await queryRunner.query(`ALTER TABLE "tb_user" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "tb_user" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "tb_user" ADD CONSTRAINT "PK_1943338f8f00e074a3c5bb48d5e" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "tb_user" DROP COLUMN "status"`);
        await queryRunner.query(`ALTER TABLE "tb_user" ADD "refreshToken" character varying(255)`);
    }

}
