import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1752931810655 implements MigrationInterface {
    name = 'Default1752931810655'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "tb_enterprise" ("cd_enterprise" SERIAL NOT NULL, "cnpj" character varying(14) NOT NULL, "name" character varying(255) NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_a50a80269ab26225c5fb38c3f25" UNIQUE ("cnpj"), CONSTRAINT "PK_e2f7664090a72077facb2138371" PRIMARY KEY ("cd_enterprise"))`);
        await queryRunner.query(`CREATE TABLE "tb_nfe" ("cd_nfe" SERIAL NOT NULL, "nr_nfe" integer NOT NULL, "authorizationKey" character varying(44) NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "enterpriseId" integer, CONSTRAINT "UQ_bddc1daeef1fcad27e653b3ea6b" UNIQUE ("authorizationKey"), CONSTRAINT "PK_220822397486c6c381954c692a3" PRIMARY KEY ("cd_nfe"))`);
        await queryRunner.query(`CREATE TABLE "tb_volume" ("cd_volume" SERIAL NOT NULL, "nr_volume" integer NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "nfeId" integer, CONSTRAINT "UQ_6b407301f425f29d15e4c28089d" UNIQUE ("nr_volume"), CONSTRAINT "PK_18e4a6eec756064f643f0bb58a5" PRIMARY KEY ("cd_volume"))`);
        await queryRunner.query(`ALTER TABLE "tb_nfe" ADD CONSTRAINT "FK_db0f5d3d793e33b33de2e20a88d" FOREIGN KEY ("enterpriseId") REFERENCES "tb_enterprise"("cd_enterprise") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "tb_volume" ADD CONSTRAINT "FK_df74e27c5140dd612b589761615" FOREIGN KEY ("nfeId") REFERENCES "tb_nfe"("cd_nfe") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tb_volume" DROP CONSTRAINT "FK_df74e27c5140dd612b589761615"`);
        await queryRunner.query(`ALTER TABLE "tb_nfe" DROP CONSTRAINT "FK_db0f5d3d793e33b33de2e20a88d"`);
        await queryRunner.query(`DROP TABLE "tb_volume"`);
        await queryRunner.query(`DROP TABLE "tb_nfe"`);
        await queryRunner.query(`DROP TABLE "tb_enterprise"`);
    }

}
