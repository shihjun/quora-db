import {MigrationInterface, QueryRunner} from "typeorm";

export class phase51560758988254 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "question_votes" ("id" int NOT NULL IDENTITY(1,1), "vote_value" int NOT NULL, "question_id" int, "user_id" int, CONSTRAINT "PK_4fcf37b1bcad3cc75921424dc07" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "answer_votes" ("id" int NOT NULL IDENTITY(1,1), "vote_value" int NOT NULL, "answer_id" int, "user_id" int, CONSTRAINT "PK_767f6bc508e4f2d6d08d65beb31" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "questions" DROP COLUMN "upvote_count"`);
        await queryRunner.query(`ALTER TABLE "questions" DROP COLUMN "downvote_count"`);
        await queryRunner.query(`ALTER TABLE "answers" DROP COLUMN "upvote_count"`);
        await queryRunner.query(`ALTER TABLE "answers" DROP COLUMN "downvote_count"`);
        await queryRunner.query(`ALTER TABLE "question_votes" ADD CONSTRAINT "FK_c7514956e9a7667e5d0136b2559" FOREIGN KEY ("question_id") REFERENCES "questions"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "question_votes" ADD CONSTRAINT "FK_b3fd868c90abc25cab8159c4881" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "answer_votes" ADD CONSTRAINT "FK_f0157023465e675660fd1709118" FOREIGN KEY ("answer_id") REFERENCES "answers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "answer_votes" ADD CONSTRAINT "FK_ab3699386b605aa8235fde46cc4" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "answer_votes" DROP CONSTRAINT "FK_ab3699386b605aa8235fde46cc4"`);
        await queryRunner.query(`ALTER TABLE "answer_votes" DROP CONSTRAINT "FK_f0157023465e675660fd1709118"`);
        await queryRunner.query(`ALTER TABLE "question_votes" DROP CONSTRAINT "FK_b3fd868c90abc25cab8159c4881"`);
        await queryRunner.query(`ALTER TABLE "question_votes" DROP CONSTRAINT "FK_c7514956e9a7667e5d0136b2559"`);
        await queryRunner.query(`ALTER TABLE "answers" ADD "downvote_count" int NOT NULL`);
        await queryRunner.query(`ALTER TABLE "answers" ADD "upvote_count" int NOT NULL`);
        await queryRunner.query(`ALTER TABLE "questions" ADD "downvote_count" int NOT NULL`);
        await queryRunner.query(`ALTER TABLE "questions" ADD "upvote_count" int NOT NULL`);
        await queryRunner.query(`DROP TABLE "answer_votes"`);
        await queryRunner.query(`DROP TABLE "question_votes"`);
    }

}
