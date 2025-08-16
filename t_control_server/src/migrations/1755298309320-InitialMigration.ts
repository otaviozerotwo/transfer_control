import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1755298309320 implements MigrationInterface {
    name = 'InitialMigration1755298309320'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "tb_enterprise" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "cnpj" character varying(14) NOT NULL, "name" character varying(255) NOT NULL, "status" character varying(50) NOT NULL DEFAULT 'active', "address" character varying(255) NOT NULL, "address_number" integer NOT NULL, "neighborhood" character varying(255) NOT NULL, "cep" character varying(100) NOT NULL, "address_latitude" numeric(10,7) NOT NULL, "address_longitude" numeric(10,7) NOT NULL, "type" "public"."tb_enterprise_type_enum" NOT NULL DEFAULT 'issuer_recipient', "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_a50a80269ab26225c5fb38c3f25" UNIQUE ("cnpj"), CONSTRAINT "PK_4b49f6605186f57a7b106041ccc" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "tb_nfe" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "nr_nfe" integer NOT NULL, "authorization_key" character varying(44) NOT NULL, "status" "public"."tb_nfe_status_enum" NOT NULL DEFAULT 'pending', "dt_emission" TIMESTAMP NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "issuerId" uuid, "recipientId" uuid, CONSTRAINT "UQ_d489cc67c7a3eca905d1251d808" UNIQUE ("authorization_key"), CONSTRAINT "PK_5b7f4d25e60b684ba9af750bba8" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "tb_volume" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "nr_volume" integer NOT NULL, "status" "public"."tb_volume_status_enum" NOT NULL DEFAULT 'pending', "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "nfeId" uuid, CONSTRAINT "UQ_6b407301f425f29d15e4c28089d" UNIQUE ("nr_volume"), CONSTRAINT "PK_d2f4190dad99b75d46e8d08e643" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "tb_user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "username" character varying(255) NOT NULL, "password" character varying(255) NOT NULL, "status" character varying(50) NOT NULL DEFAULT 'active', "role" character varying(100) NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_1943338f8f00e074a3c5bb48d5e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "tb_nfe" ADD CONSTRAINT "FK_9fca3a4f4d0434531c528ab8a6b" FOREIGN KEY ("issuerId") REFERENCES "tb_enterprise"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "tb_nfe" ADD CONSTRAINT "FK_b66baa2cd985f86d7801a001510" FOREIGN KEY ("recipientId") REFERENCES "tb_enterprise"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "tb_volume" ADD CONSTRAINT "FK_df74e27c5140dd612b589761615" FOREIGN KEY ("nfeId") REFERENCES "tb_nfe"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tb_volume" DROP CONSTRAINT "FK_df74e27c5140dd612b589761615"`);
        await queryRunner.query(`ALTER TABLE "tb_nfe" DROP CONSTRAINT "FK_b66baa2cd985f86d7801a001510"`);
        await queryRunner.query(`ALTER TABLE "tb_nfe" DROP CONSTRAINT "FK_9fca3a4f4d0434531c528ab8a6b"`);
        await queryRunner.query(`DROP TABLE "tb_user"`);
        await queryRunner.query(`DROP TABLE "tb_volume"`);
        await queryRunner.query(`DROP TABLE "tb_nfe"`);
        await queryRunner.query(`DROP TABLE "tb_enterprise"`);
    }

}
