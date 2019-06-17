import {MigrationInterface, QueryRunner} from "typeorm";

export class phase31560756930203 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "questions" ADD "like_count" int NOT NULL`);
        await queryRunner.query(`ALTER TABLE "answers" ADD "like_count" int NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "answers" DROP COLUMN "like_count"`);
        await queryRunner.query(`ALTER TABLE "questions" DROP COLUMN "like_count"`);
    }

}
