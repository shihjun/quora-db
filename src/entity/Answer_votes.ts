import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Answers } from "./Answers";
import { User } from "./User";

@Entity()
export class Answer_votes {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  vote_value: number;

  @ManyToOne(type => Answers, answer => answer.answer_votes)
  @JoinColumn({ name: "answer_id" })
  answer: Answers;

  @ManyToOne(type => User, user => user.answer_votes)
  @JoinColumn({ name: "user_id" })
  user: User;

}