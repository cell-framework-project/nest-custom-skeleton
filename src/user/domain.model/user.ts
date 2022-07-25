import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { UserName } from './user.name';
import { UserEmail } from './user.email';
import { UserNickname } from './user.nickname';
import { UserHashedPassword } from './user.hashed.password';
import { UserPassword } from './user.password';
import { AggregateRoot } from '@nestjs/cqrs';
import { UserCreatedEvent } from '../cqrs/event/user.created.event';
import { v4 as uuid4 } from 'uuid';

@Entity({name:'user'})
export class User extends AggregateRoot {

  @PrimaryGeneratedColumn('uuid')
  readonly id: string;

  @Column( ()=> UserNickname,{ prefix:false } )
  readonly nickname: UserNickname;

  @Column( ()=> UserEmail,{ prefix:false } )
  readonly email:UserEmail;

  @Column( ()=> UserName,{ prefix:false } )
  name:UserName;

  @Column( ()=> UserHashedPassword,{ prefix:false } )
  hashedPassword: UserHashedPassword;

  @Column({ name:'creation_date_time' } )
  creationDateTime:Date;

  constructor(id:string,nickname:UserNickname,email:UserEmail,hashedPassword:UserHashedPassword,name:UserName,creationDateTime:Date) {
    super();
    this.id = id;
    this.nickname = nickname;
    this.email = email;
    this.hashedPassword = hashedPassword;
    this.name = name;
    this.creationDateTime = creationDateTime;
  }

  getId():string{
    return this.id;
  }

  getNickname():UserNickname{ 
    return this.nickname;
  }

  getEmail():UserEmail{
    return this.email;
  }

  getName():UserName{
    return this.name;
  }

  getCreationDateTime():Date{
    return this.creationDateTime;
  }

  comparePassword(password:UserPassword):boolean{
    return this.hashedPassword.assert(password);
  }

  static create(nickname:UserNickname,email:UserEmail,password:UserPassword,name:UserName):User {

    const user = new User(uuid4(),nickname,email,password.hash(),name,new Date);
    user.apply( new UserCreatedEvent(user) );
    return user;

  }

}