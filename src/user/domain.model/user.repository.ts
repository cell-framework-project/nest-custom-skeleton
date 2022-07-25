import { BadRequestException, ForbiddenException, HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UserEmail } from './user.email';
import { User } from './user';
import { UserNickname } from './user.nickname';
import { UserPassword } from './user.password';


@Injectable()
export class UserRepository {
  
  constructor(private userRepository: Repository<User>,) {  }

  save(user:User):void{
    this.userRepository.manager.save(user);
  }

  async checkAvailability(nickname:UserNickname,email:UserEmail):Promise<HttpException[]>{

    const errors:HttpException[]=[];

    const emailUserCount = (await this.userRepository.find({where:{email:{value:email.value}}})).length;
    const nicknameUserCount = (await this.userRepository.find({where:{nickname:{value:nickname.value}}})).length;

    if(emailUserCount>0){
      errors.push( new BadRequestException );
    }

    if(nicknameUserCount>0){ 
      errors.push(new BadRequestException) 
    }

    return errors;
  }

  async validatePasswordByEmail(email:UserEmail,password:UserPassword):Promise<HttpException[]>{

    const errors:HttpException[]=[];

    const user = await this.userRepository.findOne({where:{email:{value:email.value}}});

    console.log(user);

    if(user==undefined){ 
      errors.push( new NotFoundException );
    }
    else{
      if(!user.comparePassword(password)){ 
        errors.push( new ForbiddenException ); 
      }

    }
    return errors;

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