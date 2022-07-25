import { Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity({name:'user_session'})
export class UserSession{

  @PrimaryGeneratedColumn('uuid')
  id: string;

}