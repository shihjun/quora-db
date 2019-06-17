import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Questions } from "./Questions";
import { User } from "./User";

@Entity()
export class Question_votes {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  vote_value: number;

  @ManyToOne(type => Questions, question => question.question_votes)
  @JoinColumn({ name: "question_id" })
  question: Questions;

  @ManyToOne(type => User, user => user.question_votes)
  @JoinColumn({ name: "user_id" })
  user: User;

}