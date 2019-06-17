import {MigrationInterface, QueryRunner} from "typeorm";

export class phase41560757054637 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "questions" DROP COLUMN "like_count"`);
        await queryRunner.query(`ALTER TABLE "answers" DROP COLUMN "like_count"`);
        await queryRunner.query(`ALTER TABLE "questions" ADD "upvote_count" int NOT NULL`);
        await queryRunner.query(`ALTER TABLE "questions" ADD "downvote_count" int NOT NULL`);
        await queryRunner.query(`ALTER TABLE "answers" ADD "upvote_count" int NOT NULL`);
        await queryRunner.query(`ALTER TABLE "answers" ADD "downvote_count" int NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "answers" DROP COLUMN "downvote_count"`);
        await queryRunner.query(`ALTER TABLE "answers" DROP COLUMN "upvote_count"`);
        await queryRunner.query(`ALTER TABLE "questions" DROP COLUMN "downvote_count"`);
        await queryRunner.query(`ALTER TABLE "questions" DROP COLUMN "upvote_count"`);
        await queryRunner.query(`ALTER TABLE "answers" ADD "like_count" int NOT NULL`);
        await queryRunner.query(`ALTER TABLE "questions" ADD "like_count" int NOT NULL`);
    }

}
