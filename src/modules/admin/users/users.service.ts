import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { NotFoundError } from 'rxjs';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  //creamos el constructor para buscar el usuarioo
  constructor(
    @InjectRepository(User)
    private userRepository:Repository<User> 
  ){}

  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll() {

    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
  //para hacer el login
  async findOneByEmail(email: string){ 

    const user = await this.userRepository.findOneBy({email:email});
    if(!user) throw new NotFoundException('el usuario con el email: ${email} no existe');
    return user;

}
 
}