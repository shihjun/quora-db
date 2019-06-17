import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Questions } from "./Questions";
import { Answers } from "./Answers";
import { Question_votes } from "./Question_votes";
import { Answer_votes } from "./Answer_votes";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(type => Questions, question => question.user)
    questions: Questions[]

    @OneToMany(type => Answers, answer => answer.user)
    answers: Answers[]

    @OneToMany(type => Question_votes, question_vote => question_vote.user)
    question_votes: Question_votes[]

    @OneToMany(type => Answer_votes, answer_vote => answer_vote.user)
    answer_votes: Answer_votes[]

}
