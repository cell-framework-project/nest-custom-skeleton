import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { UserName } from './user.name';
import { UserEmail } from './user.email';
import { UserNickname } from './user.nickname';
import { UserHashedPassword } from './user.hashed.password';
import { UserPassword } from './user.password';
import { AggregateRoot } from '@nestjs/cqrs';
import { UserCreatedEvent } from 'src/user/cqrs/event/user.created.event';
import { v4 as uuid4 } from 'uuid';
import { UserLoginSucceedEvent } from '../cqrs/event/user.login.succeed.event';
import { UserLoginFailedEvent } from '../cqrs/event/user.login.failed.event';

@Entity({name:'user'})
export class User extends AggregateRoot {

  @PrimaryGeneratedColumn('uuid')
  readonly id: string;

  @Column( ()=> UserNickname, { prefix:false } )
  readonly nickname: UserNickname;

  @Column( ()=> UserEmail, { prefix:false } )
  readonly email:UserEmail;

  @Column( ()=> UserName, { prefix:false } )
  readonly name:UserName;

  @Column({ name:'creation_date_time' } )
  readonly creationDateTime:Date;

  @Column( ()=> UserHashedPassword,{ prefix:false } )
  hashedPassword: UserHashedPassword;

  //main constructor
  constructor(id:string,nickname:UserNickname,email:UserEmail,hashedPassword:UserHashedPassword,name:UserName,creationDateTime:Date) {
    super();
    this.id = id;
    this.nickname = nickname;
    this.email = email;
    this.hashedPassword = hashedPassword;
    this.name = name;
    this.creationDateTime = creationDateTime;
  }

  comparePassword(password:UserPassword):boolean{

    const assert:boolean = this.hashedPassword.assert(password);

    if(assert){
      this.apply( new UserLoginSucceedEvent(this) );
    }
    else{
      this.apply( new UserLoginFailedEvent(this) );
    }

    return assert;

  }

  //named contructor
  static create(nickname:UserNickname,email:UserEmail,password:UserPassword,name:UserName):User {

    //creates user
    const user = new User(uuid4(),nickname,email,password.hash(),name,new Date);

    //event from creation
    user.apply( new UserCreatedEvent(user) );
    return user;

  }

}