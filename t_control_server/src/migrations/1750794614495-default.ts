import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1750794614495 implements MigrationInterface {
    name = 'Default1750794614495'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "tb_user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "username" character varying(255) NOT NULL, "password" character varying(255) NOT NULL, "status" character varying(50) NOT NULL DEFAULT 'active', "role" character varying(100) NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_1943338f8f00e074a3c5bb48d5e" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "tb_user"`);
    }

}
