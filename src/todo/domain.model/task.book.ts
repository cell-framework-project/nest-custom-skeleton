import { AggregateRoot } from "@nestjs/cqrs";
import { User } from "src/user/domain.model/user";
import { Task } from "./task";

export class TaskBook{

  readonly id:string;

  readonly creationDateTime:Date;

  readonly tasks:Task[];

  readonly user:User;

}