import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UserEmail } from './user.email';
import { User } from './user';
import { UserNickname } from './user.nickname';
import { UserPassword } from './user.password';
import { UserAvailabilityValidation } from './user.availability.validation';
import { UserPasswordValidation } from './user.password.validation';

@Injectable()
export class UserRepository {
  
  constructor(private userRepository: Repository<User>,) { 

  }

  save(user:User):void{
    this.userRepository.manager.save(user);
  }

  async checkAvailability(nickname:UserNickname,email:UserEmail):Promise<UserAvailabilityValidation>{

    const validation:UserAvailabilityValidation = new UserAvailabilityValidation;

    const emailUserCount = (await this.userRepository.find({where:{email:{value:email.value}}})).length;
    const nicknameUserCount = (await this.userRepository.find({where:{nickname:{value:nickname.value}}})).length;

    console.log(emailUserCount);
    console.log(nicknameUserCount);

    if(emailUserCount>0){
      validation.addError(new ForbiddenException) 
    }

    if(nicknameUserCount>0){ 
      validation.addError(new ForbiddenException) 
    }

    return validation;
  }

  async validatePasswordByEmail(email:UserEmail,password:UserPassword):Promise<UserPasswordValidation>{

    const validation = new UserPasswordValidation;

    const user = this.userRepository.findOne({where:{email:{value:email.value}}});

    if(user==null){ validation.addError( new NotFoundException()) }
    else{
      if(!(await user).comparePassword(password)){ validation.addError(new ForbiddenException); }
    }

    return validation;

  }

  async searchById(id:string):Promise<User>{
    return this.userRepository.findOneBy({id:id});
  }

  async searchByEmail(email:UserEmail):Promise<User>{
    return this.userRepository.findOne({where:{email:{value:email.value}}});
  }


  async searchByNickname(nickname:UserNickname):Promise<User>{
    return this.userRepository.findOne({where:{nickname:{value:nickname.value}}});
  }

  async list(): Promise<User[]> {
    return this.userRepository.find();
  }

}