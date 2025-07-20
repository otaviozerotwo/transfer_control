import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1753036816420 implements MigrationInterface {
    name = 'Default1753036816420'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tb_enterprise" ADD "address" character varying(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "tb_enterprise" ADD "addressNumber" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "tb_enterprise" ADD "neighborhood" character varying(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "tb_enterprise" ADD "cep" character varying(100) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "tb_enterprise" ADD "addressLatitude" numeric(10,7) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "tb_enterprise" ADD "addressLongitude" numeric(10,7) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "tb_nfe" ADD "dtEmission" TIMESTAMP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "tb_nfe" ADD "dtEntry" TIMESTAMP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tb_nfe" DROP COLUMN "dtEntry"`);
        await queryRunner.query(`ALTER TABLE "tb_nfe" DROP COLUMN "dtEmission"`);
        await queryRunner.query(`ALTER TABLE "tb_enterprise" DROP COLUMN "addressLongitude"`);
        await queryRunner.query(`ALTER TABLE "tb_enterprise" DROP COLUMN "addressLatitude"`);
        await queryRunner.query(`ALTER TABLE "tb_enterprise" DROP COLUMN "cep"`);
        await queryRunner.query(`ALTER TABLE "tb_enterprise" DROP COLUMN "neighborhood"`);
        await queryRunner.query(`ALTER TABLE "tb_enterprise" DROP COLUMN "addressNumber"`);
        await queryRunner.query(`ALTER TABLE "tb_enterprise" DROP COLUMN "address"`);
    }

}
