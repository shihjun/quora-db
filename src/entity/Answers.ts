import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from "typeorm";
import { Questions } from "./Questions";
import { User } from "./User";
import { Answer_votes } from "./Answer_votes"

@Entity()
export class Answers {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @ManyToOne(type => Questions, question => question.answers)
  @JoinColumn({ name: "question_id" })
  question: Questions;

  @ManyToOne(type => User, user => user.answers)
  @JoinColumn({ name: "user_id" })
  user: User;

  @OneToMany(type => Answer_votes, answer_vote => answer_vote.answer)
  answer_votes: Answer_votes[]

}