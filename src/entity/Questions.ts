import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn } from "typeorm";
import { Answers } from "./Answers";
import { User } from "./User";
import { Question_votes } from "./Question_votes";

@Entity()
export class Questions {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @OneToMany(type => Answers, answer => answer.question)
  answers: Answers[]

  @ManyToOne(type => User, user => user.questions)
  @JoinColumn({ name: "user_id" })
  user: User;

  @OneToMany(type => Question_votes, question_vote => question_vote.question)
  question_votes: Question_votes[]

}